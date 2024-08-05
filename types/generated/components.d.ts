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
  };
  attributes: {
    src: Attribute.String;
    alt: Attribute.String;
    width: Attribute.String;
    height: Attribute.String;
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
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layouts.header': LayoutsHeader;
      'components.menus': ComponentsMenus;
      'common.image': CommonImage;
      'common.actions': CommonActions;
    }
  }
}
