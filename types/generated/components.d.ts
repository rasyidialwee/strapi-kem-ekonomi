import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDropdownButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdown_buttons';
  info: {
    displayName: 'dropdownButton';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.String;
    languageOptions: Schema.Attribute.Component<
      'shared.dropdown-options',
      true
    >;
  };
}

export interface SharedDropdownOptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdown_options';
  info: {
    displayName: 'dropdownOptions';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Schema.Attribute.Component<'shared.link', false>;
    quickAccessMenu: Schema.Attribute.Component<'shared.link', true>;
    siteIdentity: Schema.Attribute.Component<'shared.site-identity', false>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    backgr: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedMiniBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_mini_banners';
  info: {
    displayName: 'miniBanner';
  };
  attributes: {
    accessibilityButton: Schema.Attribute.Component<'shared.link', false>;
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    languageDropdown: Schema.Attribute.Component<
      'shared.dropdown-button',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedSiteIdentity extends Struct.ComponentSchema {
  collectionName: 'components_shared_site_identities';
  info: {
    displayName: 'siteIdentity';
  };
  attributes: {
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.dropdown-button': SharedDropdownButton;
      'shared.dropdown-options': SharedDropdownOptions;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
      'shared.mini-banner': SharedMiniBanner;
      'shared.site-identity': SharedSiteIdentity;
    }
  }
}
