import { NYT_API_URL } from "@/constants/apis";
import { BooksResponse } from "@/types/lists";

export const getBooks = async (id: string): Promise<BooksResponse> => {
  const response = await fetch(`${NYT_API_URL}/list?name=${id}`);
  const data = await response.json();
  return data;
};
