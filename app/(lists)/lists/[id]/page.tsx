import BookCard from "@/components/BookCard";
import { getBooks } from "./server";

export default async function List({ params }: { params: { id: string } }) {
  const { id } = await params;
  const {
    results: { books },
  } = await getBooks(id);

  console.log(books);

  const formatTitle = (text: string): string => {
    const title = text.split("-").join(" ");
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

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
