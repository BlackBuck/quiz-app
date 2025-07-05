import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import { Category } from "./lib/definitions";
import { getStaticProps } from "next/dist/build/templates/pages";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/category", {
    cache: "force-cache",
  });
  const categories = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Choose a Category</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat: Category) => (
          <Link key={cat.name} href={`/quizzes/${cat.name.toLowerCase()}`}>
            <CategoryCard category={cat.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
