export interface GlobalData {
  data?: any;
}

export interface NavLink {
  title: string;
  activities?: string[];
}

export interface FooterTypes {
  phone?: string;
  prefix?: string;
  email?: string;
  socialMedia?: SocialMedia[];
}

export interface SocialMedia {
  slug?: string;
  link?: string;
}

export interface PageTypes {
  metaTitle?: string;
  metaDescription?: string;
  metaTag?: string;
  metaKeywords?: string;
  banner?: string;
  sections?: Section[];
}

export interface Section {
  slug?: string;
  title?: string | string[];
  experiences?: string[];
}

export interface Availability {
  zones?: Zone[];
}

export interface Zone {
  name?: string;
  countries?: Country[];
}

export interface Country {
  name?: string;
  countries?: City[];
}

export interface City {
  name?: string;
  hotels?: Hotel[];
}

export interface Hotel {
  name?: string;
  img?: string;
  description?: string;
  services?: string[];
  price?: number;
}
