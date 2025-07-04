// /app/lib/definitions.ts
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  id: number;
  title: string;
  category: Category;
  questions: Question[];
}

export interface Category {
  id: number;
  name: string;
}