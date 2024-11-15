import CategoryCard from "./_components/CategoryCard";
import { getCategories } from "./server";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const { results: categories } = await getCategories();

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        The New York Times Best Seller Explorer
      </h1>
      <section className="flex flex-wrap gap-3 md:gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.list_name_encoded} category={category} />
        ))}
      </section>
    </>
  );
}
