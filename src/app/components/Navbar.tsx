import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Micro-Quiz</h1>
        <Link href="/" className="text-md text-gray-600 hover:text-gray-900">Home</Link>
      </div>
    </div>
  );
}
