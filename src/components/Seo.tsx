import React, { useEffect } from 'react';
import { SITE_ORIGIN } from '../constants';

type Props = {
  title: string;
  description: string;
  /** Canonical path (e.g. "/services/skin-therapy/") */
  canonicalPath?: string;
  /**
   * Representative image for social cards (e.g. "/images/herbal/YomogiSteaming.jpg").
   * Absolute URLs are used as-is. Defaults to the site logo.
   */
  image?: string;
  /** og:type. Defaults to "website"; article pages should pass "article". */
  ogType?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/logo.png`;

const toAbsoluteUrl = (src?: string) => {
  if (!src) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_ORIGIN}${src.startsWith('/') ? src : `/${src}`}`;
};

const normalizeTrailingSlash = (pathname: string) => {
  // Normalize directory-like paths to a trailing slash.
  if (!pathname || pathname === '/') return '/';
  if (pathname.endsWith('/')) return pathname;

  const lastSegment = pathname.split('/').pop() ?? '';
  // If it looks like a file (has an extension), keep as-is.
  if (lastSegment.includes('.')) return pathname;

  return `${pathname}/`;
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertMeta = (nameOrProperty: { name?: string; property?: string }, content: string) => {
  const selector = nameOrProperty.name
    ? `meta[name="${nameOrProperty.name}"]`
    : `meta[property="${nameOrProperty.property}"]`;

  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    if (nameOrProperty.name) el.setAttribute('name', nameOrProperty.name);
    if (nameOrProperty.property) el.setAttribute('property', nameOrProperty.property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertJsonLd = (structuredData?: Record<string, unknown> | Array<Record<string, unknown>>) => {
  const id = 'seo-jsonld';
  const existing = document.head.querySelector<HTMLScriptElement>(`script#${id}[type="application/ld+json"]`);

  if (!structuredData) {
    if (existing) existing.remove();
    return;
  }

  const payload = Array.isArray(structuredData)
    ? { '@context': 'https://schema.org', '@graph': structuredData }
    : structuredData;

  const script = existing ?? document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.text = JSON.stringify(payload);

  if (!existing) {
    document.head.appendChild(script);
  }
};

/**
 * Lightweight head manager (React 19 compatible).
 *
 * Note: This runs client-side. Google generally executes JS for indexing, but
 * if you ever need guaranteed SSR metadata, we’d add a server/SSR later.
 */
export const Seo: React.FC<Props> = ({ title, description, canonicalPath, image, ogType, structuredData }) => {
  useEffect(() => {
    const socialImage = toAbsoluteUrl(image);

    document.title = title;

    upsertMeta({ name: 'description' }, description);

    // Robots policy:
    // - Production: index,follow
    // - Dev/Staging: noindex,nofollow
    const robots = import.meta.env.PROD ? 'index,follow' : 'noindex,nofollow';
    upsertMeta({ name: 'robots' }, robots);
    upsertMeta({ name: 'googlebot' }, robots);

    // Canonical URL (directory pages use trailing slash policy).
    const currentPath = normalizeTrailingSlash(window.location.pathname);
    const canonicalPathNormalized = normalizeTrailingSlash(canonicalPath ?? currentPath);
    const canonicalUrl = `${SITE_ORIGIN}${canonicalPathNormalized}`;
    upsertLink('canonical', canonicalUrl);

    // Keep OG tags in sync for sharing.
    upsertMeta({ property: 'og:title' }, title);
    upsertMeta({ property: 'og:description' }, description);
    upsertMeta({ property: 'og:type' }, ogType ?? 'website');
    upsertMeta({ property: 'og:url' }, canonicalUrl);
    upsertMeta({ property: 'og:image' }, socialImage);

    // Twitter cards.
    upsertMeta({ name: 'twitter:card' }, 'summary_large_image');
    upsertMeta({ name: 'twitter:title' }, title);
    upsertMeta({ name: 'twitter:description' }, description);
    upsertMeta({ name: 'twitter:image' }, socialImage);

    upsertJsonLd(structuredData);
  }, [title, description, canonicalPath, image, ogType, structuredData]);

  return null;
};
