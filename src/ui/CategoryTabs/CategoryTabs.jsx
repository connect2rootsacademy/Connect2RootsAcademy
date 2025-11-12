export default function CategoryTabs({ activeCategory }) {
  return (
    <div className=" flex justify-center border-gray-300 font-light px-6 py-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-700 text-center w-full max-w-xs">
        {activeCategory}
      </h1>
    </div>
  );
}
