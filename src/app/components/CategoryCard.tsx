import Image from "next/image";
export default function CategoryCard({ category }: { category: string }) {
  return (
    <div className="rounded-xl bg-white shadow-md hover:shadow-lg transition p-6 flex items-center gap-4 cursor-pointer border border-gray-200">
      <Image
        src={`/icons/${category.toLowerCase()}.png`}
        alt={`${category} icon`}
        width={48}
        height={48}
        className="rounded-full bg-gray-100 p-2"
      />
      <span className="text-lg font-semibold text-gray-800 capitalize">
        {category}
      </span>
    </div>
  );
}
