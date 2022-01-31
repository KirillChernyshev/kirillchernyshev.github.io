import axios from "axios";
import { IImageGetItemsResponse, IImageItemData } from "./ImageApi.types";

/**
 * Helper for working with Pixabay API
 */
export class ImageApi {
  private static apiEndpoint = 'https://pixabay.com/api/'; // TODO
  private static apiKey = '13417145-d0c367819415b077de5e950e3'; // TODO

  /**
   * Get empty image data.
   */
  public static getEmptyImageItemData(): IImageItemData {
    return {
      hits: [],
      lastPage: 0,
      requestedPage: 0
    };
  }
  
  /**
   * Get images by query string
   * @param query Query string
   * @param page Search result page number
   * @param itemsPerPage Max count of items per page
   */
  public static async getItems(query: string, page: number, itemsPerPage = 30)
    : Promise<IImageItemData> {
    return axios.get<IImageGetItemsResponse>(this.apiEndpoint, {
      params: {
        key: this.apiKey,
        page,
        per_page: itemsPerPage,
        q: query
      }
    }).then(response => {
      const lastPage = Math.ceil(response.data.totalHits / itemsPerPage);
  
      return {
        hits: response.data.hits,
        lastPage,
        requestedPage: page
      }
    }).catch(error => {
      let errorText = '';
      if (error.message) {
        errorText = error.message;
      } else if (error.response) {
        errorText = error.response.data;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error(error.message);
      }
      return {
        error: errorText,
        ...this.getEmptyImageItemData()
      }
    });
  }
}