// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Page | Home → Section | Keywords*
 */
export interface PageHomeDocumentDataSectionKeywordsItem {
  /**
   * Name field in *Page | Home → Section | Keywords*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_home.section_keywords[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Speed field in *Page | Home → Section | Keywords*
   *
   * - **Field Type**: Number
   * - **Placeholder**: For every full screen height scrolled, the element will shift horizontally by X% of viewport width
   * - **API ID Path**: page_home.section_keywords[].speed
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  speed: prismic.NumberField;

  /**
   * Custom CSS field in *Page | Home → Section | Keywords*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_home.section_keywords[].custom_css
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  custom_css: prismic.KeyTextField;
}

/**
 * Content for Page | Home documents
 */
interface PageHomeDocumentData {
  /**
   * Section | Keywords field in *Page | Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: page_home.section_keywords[]
   * - **Tab**: Keywords
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  section_keywords: prismic.GroupField<
    Simplify<PageHomeDocumentDataSectionKeywordsItem>
  >;
}

/**
 * Page | Home document from Prismic
 *
 * - **API ID**: `page_home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageHomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PageHomeDocumentData>,
    "page_home",
    Lang
  >;

export type AllDocumentTypes = PageHomeDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageHomeDocument,
      PageHomeDocumentData,
      PageHomeDocumentDataSectionKeywordsItem,
      AllDocumentTypes,
    };
  }
}
