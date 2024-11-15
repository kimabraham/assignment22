import { IBook } from "@/types/book";
import { getImage } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: Pick<
    IBook,
    "title" | "author" | "book_image" | "amazon_product_url" | "buy_links"
  >;
}

export default async function BookCard({ book }: BookCardProps) {
  const { base64 } = await getImage(
    book.book_image || "/images/default-book-cover.jpg"
  );

  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure className="relative h-[250px] md:h-[420px]">
        <Image
          src={book.book_image || "/images/default-book-cover.jpg"}
          alt={book.title || "Book cover"}
          fill
          className="object-cover"
          quality={25}
          placeholder="blur"
          blurDataURL={base64}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-sm md:text-base font-bold">{book.title}</h2>
        <p className="text-right text-xs">{book.author}</p>
        <div className="card-actions justify-end">
          <Link
            href={
              book.amazon_product_url ||
              book.buy_links.find((link) => link.name === "Amazon")?.url ||
              book.buy_links.filter((link) => link.url)[0].url
            }
            target="_blank"
            className="btn btn-sm md:btn-md btn-primary"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
