import React, { useEffect } from 'react';

type Props = {
  title: string;
  description: string;
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

/**
 * Lightweight head manager (React 19 compatible).
 *
 * Note: This runs client-side. Google generally executes JS for indexing, but
 * if you ever need guaranteed SSR metadata, we’d add a server/SSR later.
 */
export const Seo: React.FC<Props> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    upsertMeta({ name: 'description' }, description);

    // Keep OG tags in sync for sharing.
    upsertMeta({ property: 'og:title' }, title);
    upsertMeta({ property: 'og:description' }, description);
  }, [title, description]);

  return null;
};
