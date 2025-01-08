// Search.tsx
import React from "react";

type SearchProps = {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={onSearchChange}
        className="p-2 border border-gray-300 rounded-lg w-full"
      />
    </div>
  );
};

export default Search;
