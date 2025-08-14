import Loading from "./Loading";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { LuArrowDownUp } from "react-icons/lu";
import { cn } from "@/utils/classNames";

// Định nghĩa các loại variant có thể sử dụng
export type TableVariant = "dark" | "light" | "glass" | "blackGlass";

interface Column<T> {
  key: keyof T | string; // key của dữ liệu
  label: React.ReactNode; // tiêu đề cột, có thể là string hoặc ReactNode
  orderable?: boolean; // có cho phép sắp xếp không
  render?: (row: T) => React.ReactNode; // custom render cell
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  orderBy?: string;
  orderDirection?: "asc" | "desc";
  isLoading?: boolean;
  variant?: TableVariant;
  onOrderChange?: (orderBy: string, orderDirection: "asc" | "desc") => void;
  onRowClick?: (row: T) => void;
}

// Mapping kiểu variant sang class tailwind cho header
const headerVariantClass: Record<TableVariant, string> = {
  dark: "bg-gray-900 text-white border-gray-700",
  light: "bg-gray-50 text-gray-900 border-gray-200",
  glass: "bg-white/20 backdrop-blur-md text-white border-white/30",
  blackGlass: "bg-black/20 backdrop-blur-md text-white border-black/30",
};

// Mapping kiểu variant sang class tailwind cho body
const bodyVariantClass: Record<TableVariant, string> = {
  dark: "bg-gray-800 text-white border-gray-600 hover:bg-gray-700",
  light: "bg-white text-gray-900 border-gray-200 hover:bg-gray-50",
  glass:
    "bg-white/30 backdrop-blur-sm text-white border-white/20 hover:bg-white/20",
  blackGlass:
    "bg-black/30 backdrop-blur-sm text-white border-black/20 hover:bg-black/20",
};

const Table = <T,>({
  columns,
  data,
  orderBy,
  orderDirection,
  variant = "dark",
  onOrderChange,
  isLoading,
  onRowClick,
}: TableProps<T>) => {
  const handleOrder = (col: Column<T>) => {
    if (!col.orderable) return;
    const isAsc = orderBy === col.key && orderDirection === "asc";
    onOrderChange?.(col.key as string, isAsc ? "desc" : "asc");
  };

  return (
    <div className="w-full rounded-lg overflow-hidden border border-current/20">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key as string}
                className={cn(
                  "p-4 text-center font-bold text-base cursor-pointer whitespace-nowrap border-b border-current/20 transition-colors duration-200",
                  headerVariantClass[variant]
                )}
                onClick={() => handleOrder(col)}
              >
                <span className="flex items-center justify-center gap-1">
                  {col.label}
                  {col.orderable &&
                    (orderBy === col.key ? (
                      orderDirection === "asc" ? (
                        <AiOutlineSortAscending className="ml-1 text-xl transition-transform duration-200" />
                      ) : (
                        <AiOutlineSortDescending className="ml-1 text-xl transition-transform duration-200" />
                      )
                    ) : (
                      <LuArrowDownUp className="ml-1 text-base opacity-70" />
                    ))}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="h-8">
                <div className="flex justify-center items-center py-12">
                  <Loading
                    size="medium"
                    variant="spinner"
                    message="Loading..."
                  />
                </div>
              </td>
            </tr>
          ) : data === null || data?.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={cn(
                  "text-center text-sm lg:text-base py-8",
                  variant === "dark" || variant === "blackGlass"
                    ? "text-gray-300"
                    : "text-gray-500"
                )}
              >
                No data found
              </td>
            </tr>
          ) : (
            data?.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  "border-b border-current/20 transition-all duration-150 text-sm lg:text-base",
                  bodyVariantClass[variant],
                  onRowClick ? "cursor-pointer" : ""
                )}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col) => (
                  <td key={col.key as string} className="px-2 py-2 text-center">
                    {col.render ? col.render(row) : (row as any)[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
