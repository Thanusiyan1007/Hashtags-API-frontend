import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      // Simulating API Call (Replace with actual API later)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again!");
    }
    setLoading(false);
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-white py-16 px-6 font-mono" id="contact">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl p-8 sm:p-12 border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start">
        
        {/* Left: Contact Information */}
        <div className="w-full sm:w-1/2 flex flex-col space-y-6 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            📩 Contact Us
          </h2>
          <div className="flex items-center justify-center sm:justify-start space-x-3">
            <FaEnvelope className="text-primary text-xl" />
            <p className="text-gray-800 text-lg">rayapputhanusiyan25062000@gmail.com</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-3">
            <FaPhone className="text-primary text-xl" />
            <p className="text-gray-800 text-lg">+94758050289</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-3">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <p className="text-gray-800 text-lg">Moolai Jaffna </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="w-full sm:w-1/2 flex flex-col space-y-4 mt-6 sm:mt-0" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-primary-800 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
}
