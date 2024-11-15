import { NYT_API_URL } from "@/constants/apis";
import { BestSellerListsResponse } from "@/types/bestSeller";

export const getBestSellers = async (): Promise<BestSellerListsResponse> => {
  const response = await fetch(`${NYT_API_URL}/lists`);
  const data = await response.json();
  return data;
};
