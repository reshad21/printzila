/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.razzakfashion.com/");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const value = {
    sharedState,
    setSharedState,
    data,
    loading,
    error,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Create a custom hook for convenience
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error(
      "useMyContext muse be used within the UserProvider context"
    );
  }
  return context;
};
