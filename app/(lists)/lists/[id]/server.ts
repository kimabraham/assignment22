import { NYT_API_URL } from "@/constants/apis";
import { IBookList, IBookListResponse } from "@/types/book";
import { notFound } from "next/navigation";

export const getBooks = async (
  id: string
): Promise<IBookListResponse<IBookList>> => {
  try {
    const response = await fetch(`${NYT_API_URL}/list?name=${id}`);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status} - ${response.statusText}`);
    }

    const data: IBookListResponse<IBookList> = await response.json();

    if (data.status !== "OK") {
      throw new Error(`API returned status: ${data.status}`);
    }

    if (
      !data.results ||
      !data.results.books ||
      data.results.books.length === 0
    ) {
      notFound();
    }

    return data;
  } catch (error) {
    console.error(
      "[getBooks 함수 오류]",
      error instanceof Error
        ? `오류 메시지: ${error.message}`
        : "알 수 없는 오류가 발생했습니다"
    );
    throw error;
  }
};
