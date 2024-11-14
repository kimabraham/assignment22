import Link from "next/link";
import RightArrowIcon from "@/components/RightArrowIcon";
import { NYT_API_URL } from "@/constants/apis";
import { BestSellerListsResponse } from "@/types/bestSeller";

const getBestSellers = async (): Promise<BestSellerListsResponse> => {
  const response = await fetch(NYT_API_URL);
  const data = await response.json();
  return data;
};

export default async function Home() {
  const bestSellers = await getBestSellers();

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-16 py-12">
      <h1 className="text-4xl font-bold mb-12">
        The New York Times Best Seller Explorer
      </h1>
      <section className="flex flex-wrap gap-6">
        {bestSellers.results.map((list) => (
          <Link
            key={list.list_name_encoded}
            href={`/lists/${list.list_name_encoded}`}
            className="btn btn-lg btn-outline text-xl px-8 flex items-center gap-2"
          >
            {list.display_name}
            <RightArrowIcon />
          </Link>
        ))}
      </section>
    </main>
  );
}
