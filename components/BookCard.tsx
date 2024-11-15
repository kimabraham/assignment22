import { Book } from "@/types/lists";
import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
      <figure className="relative h-[250px] md:h-[420px]">
        <Image
          src={book.book_image || "/images/default-book-cover.jpg"}
          alt={book.title || "Book cover"}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-base font-bold">{book.title}</h2>
        <p className="text-right text-xs">{book.author}</p>
        <div className="card-actions justify-end">
          <Link href={book.amazon_product_url} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
