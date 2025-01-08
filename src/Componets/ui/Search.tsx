import React from "react";
import { useMyContext } from "../../Context/MyContextProvider";

const Search: React.FC = () => {
  const { searchTerm, handleSearch } = useMyContext();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded-lg w-[400px] bg-inherit"
      />
    </div>
  );
};

export default Search;
