import React from "react";

export default function Button({ children, variant = "primary", onClick }) {
  const baseStyles = "py-3 px-6 text-base font-medium rounded-lg focus:ring-4 transition duration-300";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900",
    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
