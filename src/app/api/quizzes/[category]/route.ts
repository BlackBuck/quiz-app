import { Quiz } from "@/app/lib/definitions";
import { ScienceQuizzes, LiteratureQuizzes, MathematicsQuizzes, EconomicsCategory, EconomicsQuizzes } from "@/app/lib/mockdata";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface ResponseType {
    message: string;
    quizzes: Quiz[];
}
export default async function GET(
    req: Request,
    {params} : {params: {cid: string}}
) : Promise<NextResponse<Quiz[]>> {
    const cid = params.cid
    switch(cid) {
        case "1":
            return NextResponse.json(EconomicsQuizzes)
        case "2":
            return NextResponse.json(MathematicsQuizzes)
        case "3":
            return NextResponse.json(ScienceQuizzes)
        case "4":
            return NextResponse.json(LiteratureQuizzes)
        default:
            return NextResponse.json([])       
    }
}