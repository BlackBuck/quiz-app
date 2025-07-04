export default function CategoryCard({category} : {category: string}) {
    return <div className="rounded-md bg-gray-500 text-white">
        {category}
    </div>
}