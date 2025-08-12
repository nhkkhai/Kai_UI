import React, { useState } from "react";
import Table from "./Table";
import Button from "./Button";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { cn } from "@/utils/classNames";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

const TableDemo: React.FC = () => {
  const [orderBy, setOrderBy] = useState<string>("");
  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">("asc");
  const [currentVariant, setCurrentVariant] = useState<
    "dark" | "light" | "glass" | "blackGlass"
  >("dark");

  const sampleData: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Moderator",
      status: "Inactive",
      lastLogin: "2024-01-10",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-01-13",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-01-12",
    },
  ];

  const columns = [
    {
      key: "id",
      label: "ID",
      orderable: true,
    },
    {
      key: "name",
      label: "Name",
      orderable: true,
    },
    {
      key: "email",
      label: "Email",
      orderable: true,
    },
    {
      key: "role",
      label: "Role",
      orderable: true,
    },
    {
      key: "status",
      label: "Status",
      orderable: true,
      render: (row: User) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "lastLogin",
      label: "Last Login",
      orderable: true,
    },
    {
      key: "actions",
      label: "Actions",
      orderable: false,
      render: (row: User) => (
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => handleView(row)}
          >
            <FaEye className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-green-600 hover:text-green-800 transition-colors"
            onClick={() => handleEdit(row)}
          >
            <FaEdit className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-red-600 hover:text-red-800 transition-colors"
            onClick={() => handleDelete(row)}
          >
            <FaTrash className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  const handleOrderChange = (
    newOrderBy: string,
    newOrderDirection: "asc" | "desc"
  ) => {
    setOrderBy(newOrderBy);
    setOrderDirection(newOrderDirection);
  };

  const handleView = (user: User) => {
    console.log("View user:", user);
  };

  const handleEdit = (user: User) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (user: User) => {
    console.log("Delete user:", user);
  };

  const handleRowClick = (user: User) => {
    console.log("Row clicked:", user);
  };

  return (
    <div className="p-8 space-y-8 bg-black min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Table Component Showcase
        </h1>
        <p className="text-gray-600 text-lg">
          Khám phá tất cả các tính năng của Table component
        </p>
      </div>

      {/* Variant Selection */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          🎨 Table Variants
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(["dark", "light", "glass", "blackGlass"] as const).map(
            (variant) => (
              <Button
                key={variant}
                variant={
                  variant === "dark"
                    ? "black"
                    : variant === "light"
                    ? "gray"
                    : "primary"
                }
                onClick={() => setCurrentVariant(variant)}
                className={cn(
                  "w-full",
                  currentVariant === variant ? "ring-2 ring-blue-500" : ""
                )}
              >
                {variant}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Table Display */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          📊 Data Table
        </h2>

        <div className="bg-black rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Current Variant:{" "}
              <span className="text-blue-600">{currentVariant}</span>
            </h3>
            <p className="text-sm text-gray-500">
              Click on column headers to sort. Click on rows to see row click
              events.
            </p>
          </div>

          <Table
            columns={columns}
            data={sampleData}
            variant={currentVariant}
            orderBy={orderBy}
            orderDirection={orderDirection}
            onOrderChange={handleOrderChange}
            onRowClick={handleRowClick}
          />
        </div>
      </div>

      {/* Features Showcase */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          ✨ Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🎯 Sortable Columns
            </h3>
            <p className="text-gray-600 text-sm">
              Click on column headers to sort data. Supports ascending and
              descending order.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🎨 Multiple Variants
            </h3>
            <p className="text-gray-600 text-sm">
              Choose from 4 different visual styles: dark, light, glass, and
              blackGlass.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🔧 Custom Rendering
            </h3>
            <p className="text-gray-600 text-sm">
              Custom render functions for complex cell content like status
              badges and action buttons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📱 Responsive Design
            </h3>
            <p className="text-gray-600 text-sm">
              Fully responsive table that works on all screen sizes with proper
              text scaling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              ⚡ Interactive Rows
            </h3>
            <p className="text-gray-600 text-sm">
              Clickable rows with hover effects and smooth transitions for
              better user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🔄 Loading States
            </h3>
            <p className="text-gray-600 text-sm">
              Built-in loading state with spinner and customizable loading
              message.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          💻 Usage Examples
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Basic Table
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {`<Table
  columns={columns}
  data={data}
  variant="dark"
  onOrderChange={handleOrderChange}
  onRowClick={handleRowClick}
/>`}
          </pre>

          <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
            With Sorting
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {`<Table
  columns={columns}
  data={data}
  variant="light"
  orderBy="name"
  orderDirection="asc"
  onOrderChange={handleOrderChange}
/>`}
          </pre>

          <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
            Custom Column Render
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {`{
  key: "status",
  label: "Status",
  render: (row) => (
    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">
      {row.status}
    </span>
  )
}`}
          </pre>
        </div>
      </div>

      {/* Console Output */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
          📝 Console Output
        </h2>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          <p>Check the browser console to see:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Sort order changes</li>
            <li>Row click events</li>
            <li>Action button clicks (View, Edit, Delete)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableDemo;
