import { getBooks } from "./server";
import { Metadata } from "next";
import { formatTitle } from "@/utils/util";
import BookCard from "./_components/BookCard";

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

interface ListProps {
  params: Promise<{ id: string }>;
}

export default async function List({ params }: ListProps) {
  const { id } = await params;
  const {
    results: { books },
  } = await getBooks(id);

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
        {formatTitle(id)}
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 justify-center py-4">
        {books.map((book) => (
          <BookCard key={book.primary_isbn13} book={book} />
        ))}
      </section>
    </>
  );
}
