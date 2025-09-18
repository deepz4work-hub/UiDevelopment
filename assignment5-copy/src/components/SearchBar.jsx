export default function SearchBar() {
  return (
    <div className="flex flex-1 mx-6 max-w-2xl">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
      />
      <button className="bg-yellow-400 px-4 rounded-r-md text-black font-semibold hover:bg-yellow-500">
        Search
      </button>
    </div>
  );
}