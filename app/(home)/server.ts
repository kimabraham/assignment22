import { ICategory, ICategoryResponse } from "@/types/category";
import { NYT_API_URL } from "@/constants/apis";
import { notFound } from "next/navigation";

export const getCategories = async (): Promise<
  ICategoryResponse<ICategory[]>
> => {
  try {
    const response = await fetch(`${NYT_API_URL}/lists`);

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status} - ${response.statusText}`);
    }

    const data: ICategoryResponse<ICategory[]> = await response.json();

    if (data.status !== "OK") {
      throw new Error(`API returned status: ${data.status}`);
    }

    if (!data.results || data.results.length === 0) {
      notFound();
    }

    return data;
  } catch (error) {
    console.error(
      "[getCategories]",
      error instanceof Error ? error.message : "알 수 없는 오류 발생"
    );
    throw error;
  }
};
