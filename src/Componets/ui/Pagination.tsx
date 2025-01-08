import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon library
import { useMyContext } from "../../Context/MyContextProvider";

const Pagination = () => {
  const { currentPage, totalPages, handlePageChange } = useMyContext();

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center space-y-2 mt-4">
      {/* Previous and Next buttons */}
      <div className="flex items-center space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex items-center justify-center p-2 bg-gray-500 rounded-full hover:bg-gray-400 disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>

        <div className="flex space-x-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === number
                  ? "bg-gray-600 text-white"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex items-center justify-center p-2 bg-gray-500 rounded-full hover:bg-gray-400 disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
