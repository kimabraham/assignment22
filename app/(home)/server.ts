import { ICategory, ICategoryResponse } from "@/types/category";
import { NYT_API_URL } from "@/constants/apis";

export const getCategories = async (): Promise<
  ICategoryResponse<ICategory[]>
> => {
  try {
    const response = await fetch(`${NYT_API_URL}/lists`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
