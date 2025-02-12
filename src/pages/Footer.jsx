import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 text-center mt-auto">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} YourTrendRank. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        Developed by <span className="font-bold text-orange-500">Thanusiyan</span>
      </p>
    </footer>
  );
}
