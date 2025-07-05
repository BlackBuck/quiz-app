import Link from "next/link";
import { Quiz } from "../lib/definitions";

export default function QuizCard({
  quiz,
  score,
}: {
  quiz: Quiz;
  score: number;
}) {
  return (
    <div className="rounded-lg bg-white p-4 shadow hover:shadow-md transition border border-gray-200 text-center grid grid-cols-3 gap-2">
      <h2 className="text-3xl font-bold text-green-500">Quiz Completed!</h2>
      <p className="text-lg text-center p-2">
        Your Score: {score} / {quiz.questions.length}
      </p>
      <Link href="/" className="text-white rounded-lg bg-blue-300 p-2">
        Go to Home
      </Link>
    </div>
  );
}
