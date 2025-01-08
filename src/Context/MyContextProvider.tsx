/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../Types";

// Create the context
const MyContext = createContext<any>(null);

// Create the provider component
export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sharedState, setSharedState] = useState("Hello, World!");
  const [data, setData] = useState<any>(null); // Will hold the converted JSON data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(5); // You can change this value based on your preference
  const [totalPages, setTotalPages] = useState<number>(1);

  // Get data from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.razzakfashion.com/");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        setTotalPages(Math.ceil(result?.data?.length / perPage)); // Set total pages
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Narrowed to Error type
        } else {
          setError("An unknown error occurred"); // Fallback for non-Error types
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [perPage]);

  // Filter users based on search term
  useEffect(() => {
    if (data?.data) {
      const filtered = data.data.filter(
        (user: User) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
      setTotalPages(Math.ceil(filtered.length / perPage)); // Recalculate total pages after filtering
    }
  }, [searchTerm, data, perPage]); // Re-run the filter when `searchTerm` or `data` changes

  // Handle search term change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // This will trigger the effect to filter the users
    setCurrentPage(1); // Reset page to 1 whenever search term changes
  };

  // Get current page users
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the page when user clicks on pagination controls
  };

  const value = {
    sharedState,
    setSharedState,
    data,
    loading,
    error,
    filteredUsers: currentUsers, // Provide only current page users
    handleSearch,
    currentPage,
    totalPages,
    handlePageChange,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Create a custom hook for convenience
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error(
      "useMyContext must be used within the UserProvider context"
    );
  }
  return context;
};
