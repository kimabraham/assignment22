import { NYT_API_URL } from "@/constants/apis";
import { IBookList, IBookListResponse } from "@/types/book";
export const getBooks = async (
  id: string
): Promise<IBookListResponse<IBookList>> => {
  try {
    const response = await fetch(`${NYT_API_URL}/list?name=${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
