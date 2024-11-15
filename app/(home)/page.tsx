import { getBestSellers } from "./server";
import CategoryCard from "@/components/CategoryCard";

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
          <CategoryCard key={list.list_name_encoded} list={list} />
        ))}
      </section>
    </>
  );
}
