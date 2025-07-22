import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../schemas/ValidationsSchema";
import { useAppContext } from "../../context/AppContext";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { axios, setShowUserLogin } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/auth/signin",
  //       // `${process.env.DOMAIN}/api/auth/signin`,
  //       data,
  //     );
  //     console.log("✅ Signin success:", response.data);

  //     localStorage.setItem("token", response.data.token);
  //     localStorage.setItem("username", response.data.user.username);
  //     localStorage.setItem("user", JSON.stringify(response.data.user));

  //     // Optional: Show success message or redirect
  //     alert("Signin successful!");
  //     navigate("/"); // Redirect to login page

  //   } catch (error) {
  //     console.error("❌ Sign-in error:", error.response?.data || error.message);
  //     alert(error.response?.data?.message || "Sign-in failed. Please try again.");
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post("/api/user/login", data);
      console.log("✅ Signup success:", response.data);
      setShowUserLogin(response.data);
      // setShowUserLogin(true);
      navigate("/");
    } catch (error) {
      console.error("❌ Sign-in error:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "Sign-in failed. Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gray-100 bg-cover bg-center px-4 sm:px-6"
      style={{
        backgroundImage: `url('/background-pattern.svg')`,
      }}
    >
      <div className="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="text-xl sm:text-2xl font-bold font-primary text-center mb-1">
          Welcome Back To ReRead!
        </h2>
        <p className="text-sm text-gray-600 font-basefont text-center mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

        <form
          className="space-y-4 font-basefont"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password")}
                className="w-full mt-1 p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              <span
                className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-500 text-sm cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot password */}
          <div className="text-right text-sm">
            <a href="/" className="text-black font-medium hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition text-sm font-medium"
          >
            Sign In
          </button>

          {/* Link */}
          <p className="text-center text-sm mt-2">
            You have not an account?{" "}
            <a
              href="/sign-up"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
