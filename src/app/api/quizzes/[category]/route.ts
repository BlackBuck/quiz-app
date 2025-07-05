// /app/api/quizzes/[category]/route.ts
import { NextResponse } from 'next/server';
import { ScienceQuizzes, TechQuizzes, HistoryQuizzes } from '@/app/lib/mockdata';
import { Category } from '@/app/lib/definitions';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const {category} = await params;
    const quizzes = [...ScienceQuizzes, ...TechQuizzes, ...HistoryQuizzes];
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