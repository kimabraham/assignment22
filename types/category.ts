import { BaseApiResponse } from "./apiType";

export interface ICategoryResponse<T> extends BaseApiResponse {
  results: T;
}

export interface BaseList {
  list_name: string;
  list_name_encoded: string;
  display_name: string;
  updated: string;
}

export interface ICategory extends BaseList {
  oldest_published_date: string;
  newest_published_date: string;
}
