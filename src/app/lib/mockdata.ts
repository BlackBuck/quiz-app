import { Quiz, Category } from "../lib/definitions";

// Categories
export const ScienceCategory: Category = {
  id: 1,
  name: "Science",
};

export const HistoryCategory: Category = {
  id: 2,
  name: "History",
};

export const TechCategory: Category = {
  id: 3,
  name: "Technology",
};

export const AllCategories: Category[] = [ScienceCategory, HistoryCategory, TechCategory]

// Quizzes
export const ScienceQuizzes: Quiz[] = [
  {
    id: 1,
    title: "General Science Quiz",
    category: ScienceCategory,
    questions: [
      {
        id: 1,
        text: "What planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctAnswer: "Mars",
      },
      {
        id: 2,
        text: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        correctAnswer: "Carbon Dioxide",
      },
    ],
  },
];

export const HistoryQuizzes: Quiz[] = [
  {
    id: 2,
    title: "Ancient Civilizations",
    category: HistoryCategory,
    questions: [
      {
        id: 1,
        text: "Which civilization built the pyramids?",
        options: ["Romans", "Egyptians", "Mayans", "Greeks"],
        correctAnswer: "Egyptians",
      },
      {
        id: 2,
        text: "Who was the first emperor of Rome?",
        options: ["Julius Caesar", "Nero", "Augustus", "Tiberius"],
        correctAnswer: "Augustus",
      },
    ],
  },
];

export const TechQuizzes: Quiz[] = [
  {
    id: 3,
    title: "Basic Computer Knowledge",
    category: TechCategory,
    questions: [
      {
        id: 1,
        text: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Power Unit", "Control Panel Unit", "Central Print Utility"],
        correctAnswer: "Central Processing Unit",
      },
      {
        id: 2,
        text: "Which company created the iPhone?",
        options: ["Google", "Microsoft", "Apple", "Samsung"],
        correctAnswer: "Apple",
      },
    ],
  },
];
