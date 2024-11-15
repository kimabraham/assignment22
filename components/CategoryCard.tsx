import Link from "next/link";
import RightArrowIcon from "./RightArrowIcon";
import { BestSellerList } from "@/types/bestSeller";

export default function CategoryCard({ list }: { list: BestSellerList }) {
  return (
    <Link
      key={list.list_name_encoded}
      href={`/lists/${list.list_name_encoded}`}
      className="btn btn-sm md:btn-lg btn-outline text-xs md:text-xl md:px-8 flex items-center gap-2"
    >
      {list.display_name}
      <RightArrowIcon />
    </Link>
  );
}
