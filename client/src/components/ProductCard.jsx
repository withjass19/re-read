import React from "react";
import { Link } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";

const ProductCard = ({
  bookName,
  author,
  imageUrl,
  sellingPrice,
  available,
  _id,
}) => {
  // const { navigate } = useAppContext();

  return (
    <Link to={`/books/book/${_id}`}>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <img src={imageUrl} alt="Book" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{bookName}</h3>
          <p className="text-sm text-gray-600">{author}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-green-600 font-semibold">
              &#8377; {sellingPrice}
            </span>
            {available ? (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                Available
              </span>
            ) : (
              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">
                Sold Out
              </span>
            )}
            {/* <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
            Available
          </span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
