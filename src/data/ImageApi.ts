import axios from "axios";
import { IImageGetItemsResponse } from "./ImageApi.types";

/**
 * Helper for working with Pixabay API
 */
export class ImageApi {
  private static apiEndpoint = 'https://pixabay.com/api/'; // TODO
  private static apiKey = '13417145-d0c367819415b077de5e950e3'; // TODO
  
  /**
   * Get images by query string
   * @param query Query string
   * @param itemsPerPage Max count of items per page
   */
  public static async getItems(query: string, itemsPerPage = 30): Promise<IImageGetItemsResponse> {
    const response = await axios.get(this.apiEndpoint, {
      params: {
        key: this.apiKey,
        per_page: itemsPerPage,
        q: query
      }
    });
    return response.data;
  }
}