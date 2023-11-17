import { ChangeEvent, FormEvent, useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3x1"
    >
      <input
        type="text"
        className="text-black border border-gray-300 rounded-1 py-2 px-4 w-full focus:outline-none focus:border-blue-500"
        value={query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-gradient-to-b from-teal-500 text-white py-2 px-6 rounded-r hover:bg-teal-800 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
