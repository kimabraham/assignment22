import { IBook } from "@/types/book";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: Pick<
    IBook,
    "title" | "author" | "book_image" | "amazon_product_url" | "buy_links"
  >;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure className="relative h-[250px] md:h-[420px]">
        <Image
          src={book.book_image || "/images/default-book-cover.jpg"}
          alt={book.title || "Book cover"}
          fill
          className="object-cover"
          quality={25}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/cover-coming-soon.png"
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
