/** Response of the Pixabay API */
export interface IImageGetItemsResponse {
  /** Array of items */
  hits: IImageItem[];
  /** The total number of items. */
  total: number;
  /** The number of items accessible through the API. */
  totalHits: number;
}

export interface IImageItem {
  /** A unique identifier. */
  id: number;
  /** Height of largeImage */
  imageHeight: number;
  /** Width of largeImage */
  imageWidth: number;
  /** Scaled image with a maximum width/height of 1280px. */
  largeImageURL: string;
  /** A pixabay page with image */
  pageURL: string;
  /** Height of image in previewURL */
  previewHeight: number;
  /** Low resolution images with a maximum width or height of 150 px. */
  previewURL: string;
  /** Width of image in previewURL */
  previewWidth: number;
  /** Comma (,) separated tags*/
  tags: string;
  /** User nickname */
  user: string;
  /** Height of image in webformatURL */
  webformatHeight: number;
  /** 
   * Medium sized image with a maximum width or height of 640 px 
   * (webformatWidth x webformatHeight). URL valid for 24 hours. 
   */
  webformatURL: string;
  /** Width of image in webformatURL */
  webformatWidth: number;
}

/** Image items with additional info */
export interface IImageItemData {
  hits: IImageItem[];
  /** number of the last page that you can request */
  lastPage: number;
  /** number of the last requested page */
  requestedPage: number;
}