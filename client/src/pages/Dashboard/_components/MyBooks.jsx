import React from "react";
// import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { format } from "date-fns";

export default function MyBooks() {
  const { products } = useAppContext();
  // const [books, setBooks] = useState([]);

  return (
    <div className="overflow-x-auto rounded-xl shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left font-semibold text-gray-700">
              Product
            </th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700">
              Author
            </th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700">
              Price
            </th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700">
              Condition
            </th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700">
              Uploaded
            </th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 flex items-center gap-3">
                <img
                  src={product.imageUrl}
                  alt={product.bookName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">
                    {product.bookName}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">{product.author}</td>
              <td className="px-6 py-4 text-gray-700">
                ₹{product.sellingPrice}
              </td>
              <td className="px-6 py-4 text-gray-700">{product.condition}</td>
              <td className="px-6 py-4 text-gray-700">
                {/* {new Date(product.createdAt).toLocaleDateString()} */}
                {format(new Date(product.createdAt), "dd-MM-yyyy")}
                {/* {product.createdAt} */}
              </td>
              <td className="text-right space-x-2">
                <div className="flex px-4 gap-3">
                  <button className="px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                    Edit
                  </button>
                  <button className="px-4 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
