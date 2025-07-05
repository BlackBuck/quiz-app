"use client";
import { Quiz } from "@/app/lib/definitions";
import { useState } from "react";
import ResultCard from "./ResultCard";

export default function QuizRunner({ quiz } : {quiz: Quiz}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[index];

  const handleAnswer = (ans: string) => {
    setSelected(ans);
    if (ans === question.correctAnswer) setScore(score + 1);
    setTimeout(() => {
      setSelected(null);
      if (index + 1 === quiz.questions.length) setFinished(true);
      else setIndex(index + 1);
    }, 1000);
  };

  if (finished) {
    return (
      <ResultCard quiz={quiz} score={score}/>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg space-y-6">
      <h2 className="text-xl font-semibold text-gray-700">
        Q{index + 1}. {question.text}
      </h2>
      <div className="grid gap-4">
        {question.options.map((option: string) => {
          const isCorrect = selected && option === question.correctAnswer;
          const isSelected = selected === option;
          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!selected}
              className={`
                px-4 py-2 rounded text-left border transition
                ${isSelected ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50"}
                ${selected && isCorrect && "bg-green-100 border-green-500 text-green-800"}
                ${selected && isSelected && !isCorrect && "bg-red-100 border-red-500 text-red-800"}
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
