import CategoryCard from "./_components/CategoryCard";
import { getCategories } from "./server";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const { results: categories } = await getCategories();

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
        The New York Times Best Seller Explorer
      </h1>
      <section className="flex flex-wrap gap-3 md:gap-6 py-4">
        {categories.map((category) => (
          <CategoryCard key={category.list_name_encoded} category={category} />
        ))}
      </section>
    </>
  );
}
