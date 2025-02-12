import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SaveHashtag() {
  const [newHashtag, setNewHashtag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 📌 Save Hashtag Function
  const saveHashtag = async () => {
    if (!newHashtag.trim()) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://hashtags-api.onrender.com/api/hashtags/save/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hashtag: newHashtag }),
      });

      if (!response.ok) throw new Error("Failed to save hashtag");

      setNewHashtag(""); // Clear input after saving
      toast.success("Hashtag saved successfully! ✅"); // 🎉 Success notification
    } catch (error) {
      setError("Error saving hashtag ❌");
      toast.error("Failed to save hashtag. Try again! ❌"); // ❌ Error notification
    }

    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-white py-14 px-6" id="saved">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">📌 Save Hashtags</h2>

      {/* Input to Save Hashtag */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter hashtag to save..."
          value={newHashtag}
          onChange={(e) => setNewHashtag(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <button
          onClick={saveHashtag}
          className="mt-3 w-full bg-orange-500 text-white py-3 rounded-md hover:bg-primary-800 transition duration-300"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Hashtag"}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar closeOnClick />
    </section>
  );
}
