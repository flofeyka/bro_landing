import React from "react";
import cn from "../../utils/classNames";

interface IProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  total: number;
  setLimit?: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ page, setPage, limit, total, setLimit }: IProps) {
  const totalPages = React.useMemo(
    () => Math.ceil(total / limit),
    [total, limit]
  );
  const visibleRange = 2;

  const start = Math.max(1, page - visibleRange);
  const end = Math.min(totalPages, page + visibleRange);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const PageButton = ({ value }: { value: number }) => (
    <button
      key={value}
      onClick={() => setPage(value)}
      disabled={value === page}
      className={cn(
        "p-2 px-3 rounded-xl transition-all",
        value === page
          ? "text-blue-500 bg-black/10 font-semibold"
          : "hover:bg-black/10"
      )}
    >
      {value}
    </button>
  );

  return (
    <div className="flex gap-2 items-end">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="p-2 px-3 hover:bg-black/10 rounded-xl disabled:opacity-40"
      >
        ‹
      </button>

      {start > 1 && (
        <>
          <PageButton value={1} />
          {start > 2 && <span>...</span>}
        </>
      )}

      {pages.map((p) => (
        <PageButton key={p} value={p} />
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span>...</span>}
          <PageButton value={totalPages} />
        </>
      )}

      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="p-2 px-3 hover:bg-black/10 rounded-xl disabled:opacity-40"
      >
        ›
      </button>

      {setLimit && (
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
          className="ml-3 border p-2 rounded-xl"
        >
          {[10, 20, 50, 100].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Pagination;
