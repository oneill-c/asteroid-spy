import camelcaseKeys from "camelcase-keys";

import { Config, HttpRequest, HttpResponse, NEOData } from "./types";

const apiUrl = process.env.EXPO_PUBLIC_NASA_API_URL;
const apiKey = process.env.EXPO_PUBLIC_NASA_API_KEY;

export interface INasaAPIClient {
  ListNEOs(startDate: string, endDate: string): Promise<HttpResponse<NEOData>>;
  // ...other NASA endpoints
}

class NasaAPIClient implements INasaAPIClient {
  public baseUrl?: string;

  constructor(config: Config) {
    Object.assign(this, config);
  }

  /**
   *
   * @name ListNEOs
   *
   * Retrieve a list of Asteroids based on their closest approach date to Earth.
   *
   * @param startDate
   * @param endDate
   * @request GET:/orgs/{org}/products
   * @returns Promise<HttpResponse<NEOData>>
   */
  public ListNEOs = async (
    startDate: string,
    endDate: string
  ): Promise<HttpResponse<NEOData>> => {
    const request: HttpRequest = {
      path: "/neo/rest/v1/feed",
      method: "GET",
      params: new URLSearchParams({
        start_date: startDate,
        end_date: endDate,
      }),
    };

    return this.request<NEOData>(request);
  };

  private request = async <T = any>(
    request: HttpRequest
  ): Promise<HttpResponse<T>> => {
    let allParams = new URLSearchParams({
      api_key: apiKey as string,
    }).toString();

    if (request.params) {
      allParams = allParams.concat(`&${request.params.toString()}`);
    }

    const url = new URL(`${this.baseUrl}${request.path}`);
    url.search = allParams;

    return fetch(url.toString())
      .then(async (resp) => {
        const data = await resp.json();
        const responseData: HttpResponse<T> = {
          data: this.marshalData<T>(data),
          ...resp,
        };
        return responseData;
      })
      .catch((error) => {
        console.error(`ERROR: ${request.path}`, error);
        throw error;
      });
  };

  private marshalData<T>(jsonData: any): T {
    return camelcaseKeys(jsonData, { deep: true }) as T;
  }
}

export default new NasaAPIClient({ baseUrl: apiUrl });
