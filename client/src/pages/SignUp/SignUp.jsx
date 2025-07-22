"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../schemas/ValidationsSchema";
import { useAppContext } from "../../context/AppContext";
import toast ,{ Toaster } from "react-hot-toast";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const { axios, setShowUserLogin } = useAppContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "/api/user/register",
        data
      );
      console.log("✅ Signup success:", response.data);
      toast.success("Signup successful!");
      setShowUserLogin(response.data)
      // setShowUserLogin(true);
      navigate("/");
    } catch (error) {
      console.error("❌ Signup error:", error.message);
      toast.error("Signup error");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gray-100 bg-cover bg-center px-4"
      style={{
        backgroundImage: `url('/background-pattern.svg')`,
      }}
    >
      <div className="absolute z-50">
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold font-primary text-center mb-1">
          Welcome To ReRead!
        </h2>
        <p className="text-sm text-gray-600 font-basefont text-center mb-6">
          Buy & sell used books effortlessly
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 font-basefont"
        >
          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your username"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="Enter your phone number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter password"
                className="w-full mt-1 p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <span
                className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-500 text-sm cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <a
              href="/sign-in"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
