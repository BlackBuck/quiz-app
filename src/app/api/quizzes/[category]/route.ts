// /app/api/quizzes/[category]/route.ts
import { NextResponse } from 'next/server';
import { EconomicsQuizzes, ScienceQuizzes, MathematicsQuizzes, LiteratureQuizzes } from '@/app/lib/mockdata';
import { Category } from '@/app/lib/definitions';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const {category} = await params;
    const quizzes = [...EconomicsQuizzes, ...ScienceQuizzes, ...MathematicsQuizzes, ...LiteratureQuizzes];
    const filteredQuizzes = quizzes.filter(
      (quiz) => quiz.category!.name.toLowerCase() === category
    );

    if (filteredQuizzes.length === 0) {
      return NextResponse.json({ message: 'No quizzes found for this category' }, { status: 404 });
    }

    return NextResponse.json(filteredQuizzes);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}