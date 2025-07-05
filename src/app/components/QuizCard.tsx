import Link from "next/link";

export default function QuizCard({ quiz }: { quiz: { id: number; title: string; description?: string } }) {
  return (
    <Link href={`/quiz/${quiz.id}`}>
      <div className="rounded-lg bg-white p-4 shadow hover:shadow-md transition border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{quiz.title}</h3>
        {quiz.description && (
          <p className="text-sm text-gray-600 mt-1">{quiz.description}</p>
        )}
      </div>
    </Link>
  );
}
