import { useNavigate } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      navigate(`/?page=${prevPage}`);
    }
  };

  const handleNextClick = () => {
    const nextPage = currentPage + 1;
    navigate(`/?page=${nextPage}`);
  };

  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button
          onClick={handlePreviousClick}
          className="mr-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded text-white"
        >
          Previous
        </button>
      )}

      {currentPage < totalPages && (
        <button
          onClick={handleNextClick}
          className="ml-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded text-white"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
