"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
export const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <Button
      className="flex-center bg-content h-9 w-9 rounded-full shadow-lg transition-colors hover:cursor-pointer lg:h-10 lg:w-10"
      onClick={toggleDarkMode}
    >
      <i
        className={`bx bx-${darkMode ? "sun" : "moon"} text-lg lg:text-xl`}
      ></i>
    </Button>
  );
};
