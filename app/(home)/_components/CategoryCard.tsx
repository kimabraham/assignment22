import Link from "next/link";
import RightArrowIcon from "./RightArrowIcon";
import { ICategory } from "@/types/category";

interface CategoryCardProps {
  category: Pick<ICategory, "display_name" | "list_name_encoded">;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      key={category.list_name_encoded}
      href={`/lists/${category.list_name_encoded}`}
      className="btn btn-sm md:btn-lg btn-outline text-xs md:text-xl md:px-8 flex items-center gap-2"
    >
      {category.display_name}
      <RightArrowIcon />
    </Link>
  );
}
