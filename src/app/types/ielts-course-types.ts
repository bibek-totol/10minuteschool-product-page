export interface Data {
    slug: string;
    id: number;
    title: string;
    description: string;
    media: Medium[];
    checklist: Checklist[];
    seo: Seo[];
    cta_text: CtaText;
    sections: Section[];
  }
  
  export interface Medium {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
  }
  
  export interface Checklist {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
  }
  
  export interface Seo {
    // Define structure if needed; currently empty in sample
    [key: string]: any;
  }
  
  export interface CtaText {
    name: string;
    value: string;
  }
  
  export interface Section {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: SectionValue[];
  }
  
  export interface SectionValue {
    id: string;
    title?: string;
    subtitle?: string;
    icon?: string;
    image?: string;
    description?: string;
    short_description?: string;
    slug?: string;
    background?: Background;
    cta?: CTA;
    thumbnail?: string;
    top_left_icon_img?: string;
    checklist?: string[];
    file_type?: string;
    file_url?: string;
    video_thumbnail?: string;
    video_type?: string;
    video_url?: string;
    profile_image?: string;
    testimonial?: string;
    name?: string;
    text?: string;
    color?: string;
    list_page_visibility?: boolean;
  }
  
  export interface Background {
    image: string;
    primary_color: string;
    secondary_color: string;
  }
  
  export interface CTA {
    clicked_url: string;
    color: string;
    text: string;
  }

  export type SupportedLanguages = 'bn' | 'en';
  