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
      className="w-9 h-9 lg:w-10 lg:h-10 flex-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors hover:cursor-pointer"
      onClick={toggleDarkMode}
    >
      <i className="size-4 text-lg lg:text-xl"></i>
    </Button>
  );
};
