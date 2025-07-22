import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 text-center">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-5xl font-bold font-primary mb-2">404</h1>
      <p className="text-lg sm:text-xl font-basefont mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition font-medium"
      >
        Go Back Home
      </button>
    </div>
  );
}