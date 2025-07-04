import { NextResponse } from 'next/server';
import { AllCategories } from '@/app/lib/mockdata';
import { Category } from '@/app/lib/definitions';

export async function GET() : Promise<NextResponse<Category[]>> {
  return NextResponse.json(AllCategories);
}
