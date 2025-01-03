import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | NYT Best Sellers",
};

export default function NotFound() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-24` lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-12 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
          Something&apos;s missing.
        </p>
        <p className="mb-16 text-lg font-light text-gray-500">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
