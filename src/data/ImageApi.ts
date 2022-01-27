import axios from "axios";
import { IImageGetItemsResponse } from "./ImageApi.types";

/**
 * Helper for working with Pixabay API
 */
export class ImageApi {
  private static apiEndpoint = 'https://pixabay.com/api/'; // TODO
  private static apiKey = '13417145-d0c367819415b077de5e950e3'; // TODO
  
  public static async getItems(query: string): Promise<IImageGetItemsResponse> {
    const response = await axios.get(this.apiEndpoint, {
      params: {
        key: this.apiKey,
        per_page: 30,
        q: query
      }
    });
    return response.data;
  }
}