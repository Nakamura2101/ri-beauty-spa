
// Define the supported languages for the application's translation system.
export type Language = 'vi' | 'en' | 'jp';

export type ServiceCategory = 'rituals' | 'body' | 'skin';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  titleEn: string;
  titleJp: string;
  description: string;
  price: string;
  image: string;
}

export interface ArticleItem {
  id: string;
  titleEn: string;
  titleJp: string;
  content: string;
  image: string;
  tagEn?: string;
  tagJp?: string;
}

export interface NavItem {
  labelEn: string;
  labelJp: string;
  href: string;
}
