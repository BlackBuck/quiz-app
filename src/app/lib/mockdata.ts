import type { Category, Quiz } from "./definitions"

export const EconomicsCategory: Category = { id: 1, name: "Economics" }
export const MathsCategory: Category = { id: 2, name: "Mathematics" }
export const ScienceCategory: Category = { id: 3, name: "Science" }
export const LiteratureCategory: Category = { id: 4, name: "Literature" }

export const AllCategories: Category[] = [EconomicsCategory, MathsCategory, ScienceCategory, LiteratureCategory]

export const LiteratureQuizzes: Quiz[] = [
    {
        id: 1,
        title: "Oscar Wilde Quiz",
        category: LiteratureCategory,
        questions: []
    },
]

export const MathematicsQuizzes: Quiz[] = [
    {
        id: 2,
        title: "Number Theory Quiz",
        category: MathsCategory,
        questions: []
    },
]
export const EconomicsQuizzes: Quiz[] = [
    {
        id: 3,
        title: "Macroeconomics Quiz",
        category: EconomicsCategory,
        questions: []
    },
]
export const ScienceQuizzes: Quiz[] = [
    {
        id: 4,
        title: "PhysicsQuiz",
        category: ScienceCategory,
        questions: []
    },
]
