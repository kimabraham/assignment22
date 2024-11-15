import { BaseList } from "./category";
import { ICategoryResponse } from "./category";

export interface IBookListResponse<T> extends ICategoryResponse<T> {
  last_modified: string;
}

export interface IBookList extends BaseList {
  bestsellers_date: string;
  published_date: string;
  published_date_description: string;
  next_published_date: string;
  previous_published_date: string;
  normal_list_ends_at: number;
  books: IBook[];
  corrections: [];
}

interface ISBN {
  isbn10: string;
  isbn13: string;
}

interface BuyLink {
  name: string;
  url: string;
}

export interface IBook {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  title: string;
  author: string;
  publisher: string;
  description: string;
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  isbns: ISBN[];
  contributor: string;
  contributor_note: string;
  age_group: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  book_uri: string;
  buy_links: BuyLink[];
}
