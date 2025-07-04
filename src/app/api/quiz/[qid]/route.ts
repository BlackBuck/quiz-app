import { Quiz } from "@/app/lib/definitions";
import { ScienceQuizzes, LiteratureQuizzes, MathematicsQuizzes, EconomicsQuizzes } from "@/app/lib/mockdata";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ qid: string }> }
): Promise<NextResponse<Quiz | { error: string }>> {
    const { qid } = await params
    
    switch (qid) {
        case '1':
            return NextResponse.json(EconomicsQuizzes[0]);
        case '2':
            return NextResponse.json(MathematicsQuizzes[0]);
        case '3':
            return NextResponse.json(ScienceQuizzes[0]);
        case '4':
            return NextResponse.json(LiteratureQuizzes[0], { status: 200 });
        default:
            return NextResponse.json({ error: "not found" }, { status: 404 });
    }
}
