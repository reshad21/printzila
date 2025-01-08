import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon library
import { useMyContext } from "../../Context/MyContextProvider";

const Pagination = () => {
  const { currentPage, totalPages, handlePageChange } = useMyContext();

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="flex items-center justify-center p-2 bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50"
      >
        <FaChevronLeft />
      </button>

      <span className="font-semibold text-lg">
        {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="flex items-center justify-center p-2 bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
