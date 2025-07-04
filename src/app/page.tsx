import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import { Category } from "./lib/definitions";

// app/page.tsx
export const metadata = {
  title: "Micro-Quiz Platform",
  description: "Take topic-specific micro quizzes on science, history, and more.",
};

export default async function Home() {
  const res = await fetch(`http://localhost:3000/api/category`);
  const categories = await res.json();
  console.log("categories: ", categories)

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {categories.map((cat: Category) => {
        let categoryName = cat.name;
        <Link key={categoryName} href={`/quizzes/${categoryName.toLowerCase()}`}>
          <CategoryCard category={categoryName} />
        </Link>
      })}
    </div>
  );
}
