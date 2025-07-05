import { render, screen } from "@testing-library/react";
import QuizRunner from "@/app/components/QuizRunner";
import { Quiz } from "@/app/lib/definitions";
import { ScienceCategory } from "@/app/lib/mockdata";

const mockQuiz: Quiz = {
  id: 1,
  title: "Science Basics",
  category: ScienceCategory,
  questions: [
    {
      id: 1,
      text: "What is H2O?",
      options: ["Oxygen", "Hydrogen", "Water", "Carbon"],
      correctAnswer: "Water",
    },
    {
      id: 2,
      text: "Earth is the ___ planet from the sun.",
      options: ["2nd", "3rd", "4th", "5th"],
      correctAnswer: "3rd",
    },
  ],
};

describe("QuizRunner Component", () => {
  test("renders first question and options", () => {
    render(<QuizRunner quiz={mockQuiz} />);

    expect(screen.getByText("Q1. What is H2O?")).toBeInTheDocument();
    expect(screen.getByText("Water")).toBeInTheDocument();
    expect(screen.getByText("Oxygen")).toBeInTheDocument();
    expect(screen.getByText("Water")).toBeInTheDocument();
    expect(screen.getByText("Carbon")).toBeInTheDocument();
    
  });
});
