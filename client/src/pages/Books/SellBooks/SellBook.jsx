import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { bookSellSchema } from "../../../schemas/ValidationsSchema";
// import "../../../App.css";
// import axios from "axios";
import '../../../index.css'
import '../../../style.css'

export default function SellBook() {
  const [imagePreview, setImagePreview] = useState(null);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(bookSellSchema),
  // });

  // const onSubmit = async (data) => {
  //   const file = data.bookImage[0];

  //   const formData = new FormData();
  //   formData.append("image", file); // 👈 backend me multer.single("image") use kar rahe ho?
  //   formData.append("bookName", data.bookName);
  //   formData.append("author", data.author);
  //   formData.append("originalPrice", data.price);
  //   formData.append("sellingPrice", data.selling_price);
  //   formData.append("condition", data.condition);
  //   formData.append("category", data.category);
  //   formData.append("description", data.description);

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/books/upload",
  //       // `${process.env.DOMAIN}/api/books/upload`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       } // ✅ headers mat do manually!
  //     );
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error("❌ Upload failed:", err);
  //   }
  // };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-2xl bg-white p-6 sm:p-10 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center font-primary">
          Sell Your Book
        </h2>

        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 font-basefont"
        >
          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium">Book Image</label>
            <input
              type="file"
              accept="image/*"
              // {...register("bookImage")}
              className="form-input"
              onChange={(e) =>
                setImagePreview(URL.createObjectURL(e.target.files[0]))
              }
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 h-40 rounded-md object-cover"
              />
            )}
            {/* <p className="text-red-500 text-sm">{errors.bookImage?.message}</p> */}
          </div>

          {/* Other Inputs Below */}
          <div>
            <label className="text-sm font-medium">Book Name</label>
            <input 
            // {...register("bookName")} 
            className="form-input" />
            {/* <p className="text-red-500 text-sm">{errors.bookName?.message}</p> */}
          </div>

          <div>
            <label className="text-sm font-medium">Author</label>
            <input 
            // {...register("author")} 
            className="form-input" />
            {/* <p className="text-red-500 text-sm">{errors.author?.message}</p> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium">Original Price (₹)</label>
              <input
                type="number"
                // {...register("price")}
                className="form-input"
              />
              {/* <p className="text-red-500 text-sm">{errors.price?.message}</p> */}
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium">Selling Price (₹)</label>
              <input
                type="number"
                // {...register("selling_price")}
                className="form-input"
              />
              {/* <p className="text-red-500 text-sm">
                {errors.selling_price?.message}
              </p> */}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Condition</label>
            <select 
            // {...register("condition")} 
            className="form-input">
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
            </select>
            {/* <p className="text-red-500 text-sm">{errors.condition?.message}</p> */}
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <select 
            // {...register("category")} 
            className="form-input">
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Academic">Academic</option>
              <option value="Biography">Biography</option>
            </select>
            {/* <p className="text-red-500 text-sm">{errors.category?.message}</p> */}
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows="4"
              // {...register("description")}
              className="form-input resize-none"
            />
            {/* <p className="text-red-500 text-sm">
              {errors.description?.message}
            </p> */}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
