// app/quizzes/[id]/page.tsx

import QuizCard from "@/app/components/QuizCard";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const {id} = await params;
  return {
    title: `${id} Quizzes | Micro-Quiz Platform`,
    description: `Explore all quizzes under the ${id} category`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const res = await fetch(`http://localhost:3000/api/quizzes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="text-center mt-10 text-red-600">Failed to load quizzes.</div>;
  }

  const quizzes = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {id} Quizzes
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {quizzes.map((quiz: any) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}
