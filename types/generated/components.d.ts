import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutsHeader extends Schema.Component {
  collectionName: 'components_layouts_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'common.image'>;
    categories: Attribute.Component<'components.menus'>;
    actions: Attribute.Component<'common.actions', true>;
  };
}

export interface LayoutsFooter extends Schema.Component {
  collectionName: 'components_layouts_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    logo: Attribute.Component<'common.image'>;
    work_time: Attribute.Component<'common.actions'>;
    quick_links: Attribute.Component<'common.actions', true>;
    copyright: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface ComponentsMenus extends Schema.Component {
  collectionName: 'components_components_menus';
  info: {
    displayName: 'Categories';
    description: '';
  };
  attributes: {
    categories: Attribute.Relation<'components.menus', 'oneToMany', 'api::category.category'>;
  };
}

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    src: Attribute.String;
    alt: Attribute.String;
    width: Attribute.String;
    height: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Text;
  };
}

export interface CommonActions extends Schema.Component {
  collectionName: 'components_common_actions';
  info: {
    displayName: 'action';
    description: '';
  };
  attributes: {
    src: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    heading: Attribute.String;
    subHeading: Attribute.String;
    link: Attribute.Component<'common.actions'>;
  };
}

export interface BlocksAssociationWith extends Schema.Component {
  collectionName: 'components_blocks_association_withs';
  info: {
    displayName: 'Association With';
    description: '';
  };
  attributes: {
    icon: Attribute.Component<'common.image', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layouts.header': LayoutsHeader;
      'layouts.footer': LayoutsFooter;
      'components.menus': ComponentsMenus;
      'common.image': CommonImage;
      'common.actions': CommonActions;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.association-with': BlocksAssociationWith;
    }
  }
}
