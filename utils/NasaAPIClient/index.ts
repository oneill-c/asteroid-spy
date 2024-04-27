import camelcaseKeys from "camelcase-keys";

import { Config, HttpRequest, HttpResponse, NEOData } from "./types";

const apiUrl = process.env.EXPO_PUBLIC_NASA_API_URL;
console.log("%c Line:6 🍋 apiUrl", "color:#e41a6a", apiUrl);
const apiKey = process.env.EXPO_PUBLIC_NASA_API_KEY;

export interface INasaAPIClient {
  listNEOs(startDate: string, endDate: string): Promise<HttpResponse<NEOData>>;
  // ...other NASA endpoints
}

class NasaAPIClient implements INasaAPIClient {
  public baseUrl?: string;

  constructor(config: Config) {
    Object.assign(this, config);
  }

  public listNEOs = async (
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

    const apiUrl = new URL(`${this.baseUrl}${request.path}`);
    apiUrl.search = allParams;

    return fetch(apiUrl.toString())
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
    return camelcaseKeys(jsonData) as T;
  }
}

export default new NasaAPIClient({ baseUrl: apiUrl });