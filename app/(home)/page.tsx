import Link from "next/link";
import RightArrowIcon from "@/components/RightArrowIcon";
import { getBestSellers } from "./server";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const bestSellers = await getBestSellers();

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        The New York Times Best Seller Explorer
      </h1>
      <section className="flex flex-wrap gap-3 md:gap-6">
        {bestSellers.results.map((list) => (
          <Link
            key={list.list_name_encoded}
            href={`/lists/${list.list_name_encoded}`}
            className="btn btn-sm md:btn-lg btn-outline text-xs md:text-xl md:px-8 flex items-center gap-2"
          >
            {list.display_name}
            <RightArrowIcon />
          </Link>
        ))}
      </section>
    </>
  );
}
