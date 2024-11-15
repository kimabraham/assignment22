import BookCard from "@/components/BookCard";
import { getBooks } from "./server";
import { Metadata } from "next";
import { formatTitle } from "@/utils/util";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: formatTitle(id),
  };
}

export default async function List({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const {
    results: { books },
  } = await getBooks(id);

  return (
    <>
      <p className="text-4xl font-bold mb-12 text-center">{formatTitle(id)}</p>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {books.map((book) => (
          <BookCard key={book.primary_isbn13} book={book} />
        ))}
      </section>
    </>
  );
}
