import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {};
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    MainMenu: Schema.Attribute.Component<'shared.menu', false>;
    SiteDescription: Schema.Attribute.RichText;
    SiteName: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButton: Schema.Attribute.String;
    isExternal: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    MenuItem: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_shared_slideshows';
  info: {
    displayName: 'slideshow';
  };
  attributes: {
    name: Schema.Attribute.String;
    slider: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.menu': SharedMenu;
      'shared.slideshow': SharedSlideshow;
      'shared.text': SharedText;
    }
  }
}
