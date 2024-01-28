import type { Schema, Attribute } from '@strapi/strapi';

export interface MiscCountryItem extends Schema.Component {
  collectionName: 'components_misc_country_items';
  info: {
    displayName: 'country-item';
    description: '';
  };
  attributes: {
    slug: Attribute.String;
    name: Attribute.String;
    lat: Attribute.String;
    lng: Attribute.String;
    img: Attribute.Media;
    eng_name: Attribute.String;
  };
}

export interface MiscFooterInfo extends Schema.Component {
  collectionName: 'components_page_item_footer_infos';
  info: {
    displayName: 'footer_info';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
  };
}

export interface MiscHistoryItem extends Schema.Component {
  collectionName: 'components_misc_history_items';
  info: {
    displayName: 'history-item';
    icon: 'apps';
    description: '';
  };
  attributes: {
    year: Attribute.String;
    month: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface MiscLicenseItemChild extends Schema.Component {
  collectionName: 'components_misc_license_item_children';
  info: {
    displayName: 'license_item_child';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface MiscProgressItem extends Schema.Component {
  collectionName: 'components_misc_progress_items';
  info: {
    displayName: 'progress-item';
    icon: 'archive';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface PageItemContent extends Schema.Component {
  collectionName: 'components_page_item_contents';
  info: {
    displayName: 'content';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface PageItemFaqList extends Schema.Component {
  collectionName: 'components_page_item_faq_lists';
  info: {
    displayName: 'faq-list';
    icon: 'archive';
  };
  attributes: {
    item: Attribute.Component<'page-item.faq', true>;
  };
}

export interface PageItemFaq extends Schema.Component {
  collectionName: 'components_page_item_faqs';
  info: {
    displayName: 'faq';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    button_name: Attribute.String;
    button_link: Attribute.String;
  };
}

export interface PageItemGallery extends Schema.Component {
  collectionName: 'components_page_item_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'archive';
  };
  attributes: {
    imgs: Attribute.Media;
  };
}

export interface PageItemHistorySlide extends Schema.Component {
  collectionName: 'components_page_item_history_slides';
  info: {
    displayName: 'history-slide';
    icon: 'archive';
  };
  attributes: {
    year: Attribute.String;
    title: Attribute.String;
    desc: Attribute.RichText;
    img: Attribute.Media;
  };
}

export interface PageItemHistorySlider extends Schema.Component {
  collectionName: 'components_page_item_history_sliders';
  info: {
    displayName: 'history-slider';
    icon: 'apps';
  };
  attributes: {
    item: Attribute.Component<'page-item.history-slide', true>;
  };
}

export interface PageItemHistory extends Schema.Component {
  collectionName: 'components_page_item_histories';
  info: {
    displayName: 'history';
    icon: 'archive';
    description: '';
  };
  attributes: {
    history: Attribute.Component<'misc.history-item', true>;
  };
}

export interface PageItemInterviewSlider extends Schema.Component {
  collectionName: 'components_page_item_interview_sliders';
  info: {
    displayName: 'interview_slider';
    icon: 'archive';
  };
  attributes: {
    item: Attribute.Component<'page-item.interview', true>;
  };
}

export interface PageItemInterview extends Schema.Component {
  collectionName: 'components_page_item_interviews';
  info: {
    displayName: 'Interview';
    icon: 'archive';
  };
  attributes: {
    name: Attribute.String;
    thumb: Attribute.Media;
    interview: Attribute.Text;
    eng_name: Attribute.String;
    team: Attribute.String;
  };
}

export interface PageItemLicenseItem extends Schema.Component {
  collectionName: 'components_page_item_license_items';
  info: {
    displayName: 'license_item';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.RichText;
    childs: Attribute.String;
  };
}

export interface PageItemLicenses extends Schema.Component {
  collectionName: 'components_page_item_licenses';
  info: {
    displayName: 'licenses';
    icon: 'archive';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'page-item.license-item', true>;
  };
}

export interface PageItemPipeline extends Schema.Component {
  collectionName: 'components_page_item_pipelines';
  info: {
    displayName: 'pipeline';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'page-item.pipline', true>;
    progress: Attribute.String;
  };
}

export interface PageItemPipline extends Schema.Component {
  collectionName: 'components_page_item_piplines';
  info: {
    displayName: 'pipeline_item';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    desc: Attribute.String;
    progress: Attribute.String;
    category: Attribute.String;
  };
}

export interface PageItemProfile extends Schema.Component {
  collectionName: 'components_profile_item_profiles';
  info: {
    displayName: 'profile_item';
    icon: 'archive';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    desc: Attribute.RichText;
    job: Attribute.String;
    eng_name: Attribute.String;
    job_2: Attribute.String;
    thumbnail: Attribute.Media;
    detail_image: Attribute.Media;
  };
}

export interface PageItemProfiles extends Schema.Component {
  collectionName: 'components_page_item_profiles';
  info: {
    displayName: 'profiles';
    icon: 'archive';
  };
  attributes: {
    item: Attribute.Component<'page-item.profile', true>;
  };
}

export interface PageItemRecruit extends Schema.Component {
  collectionName: 'components_page_item_recruits';
  info: {
    displayName: 'recruit';
    icon: 'archive';
    description: '';
  };
  attributes: {
    department: Attribute.String;
    job: Attribute.String;
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface PageItemSeo extends Schema.Component {
  collectionName: 'components_page_item_seos';
  info: {
    displayName: 'SEO';
    icon: 'apps';
    description: '';
  };
  attributes: {
    thumbnail: Attribute.Media;
    desc: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'misc.country-item': MiscCountryItem;
      'misc.footer-info': MiscFooterInfo;
      'misc.history-item': MiscHistoryItem;
      'misc.license-item-child': MiscLicenseItemChild;
      'misc.progress-item': MiscProgressItem;
      'page-item.content': PageItemContent;
      'page-item.faq-list': PageItemFaqList;
      'page-item.faq': PageItemFaq;
      'page-item.gallery': PageItemGallery;
      'page-item.history-slide': PageItemHistorySlide;
      'page-item.history-slider': PageItemHistorySlider;
      'page-item.history': PageItemHistory;
      'page-item.interview-slider': PageItemInterviewSlider;
      'page-item.interview': PageItemInterview;
      'page-item.license-item': PageItemLicenseItem;
      'page-item.licenses': PageItemLicenses;
      'page-item.pipeline': PageItemPipeline;
      'page-item.pipline': PageItemPipline;
      'page-item.profile': PageItemProfile;
      'page-item.profiles': PageItemProfiles;
      'page-item.recruit': PageItemRecruit;
      'page-item.seo': PageItemSeo;
    }
  }
}
