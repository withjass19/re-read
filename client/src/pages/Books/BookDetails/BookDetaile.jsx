// BookDetails.jsx
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { useAppContext } from "../../../context/AppContext";

export default function BookDetails() {
  const { id } = useParams(); // fetch bookId from route (e.g. /books/book/123)
  const [book, setBook] = useState(null);
  const { axios, navigate } = useAppContext();
  const [loading, setLoading] = useState(true);

  // const defaultAvatar = "/assets/image/default-profile.png";

  // Simulate fetched book
  // const book = {
  //   bookName: "Atomic Habits",
  //   author: "James Clear",
  //   selling_price: 199,
  //   price: 499,
  //   url: "/assets/image/zero-to-one.jpeg",
  //   description: "Learn how to build good habits and break bad ones.",
  //   category: "Self-Help",
  //   condition: "Like New",
  //   ISBN: "978-0143455127",
  //   edition: "2nd",
  //   subject: "Personal Development",
  //   seller: {
  //     name: "Jaspreet Singh",
  //     avatar: "/avatar.png"
  //   }
  // };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`/api/books/book/${id}`);
        // console.log(res.data);
        setBook(res.data);
      } catch (err) {
        console.error("Error fetching book:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10 mt-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8">
        {/* Book Image */}
        <div className="flex justify-center items-center">
          <img
            src={book.imageUrl}
            alt={book.bookName}
            className="w-full max-w-sm rounded-lg"
          />
        </div>

        {/* Book Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-primary">{book.bookName}</h2>
          <p className="text-lg text-gray-500 font-basefont">
            by {book.author}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-xl font-bold">&#x20B9;{book.sellingPrice}</p>
            <p className="text-lg text-gray-400 line-through">
              &#x20B9;{book.originalPrice}
            </p>
          </div>
          {book.available ? (
            <p className="text-sm bg-green-100 text-green-700 w-fit px-3 py-1 rounded-full">
              Available
            </p>
          ) : (
            <p className="text-sm bg-red-400 text-green-700 w-fit px-3 py-1 rounded-full">
              Sold Out
            </p>
          )}
          {/* <p className="text-sm bg-green-100 text-green-700 w-fit px-3 py-1 rounded-full">
            Available
          </p> */}

          <div className="pt-4 text-sm font-basefont space-y-1">
            <p>
              <strong>Category:</strong> {book.category}
            </p>
            <p>
              <strong>Condition:</strong> {book.condition}
            </p>
            {/* <p><strong>ISBN:</strong> {book.ISBN}</p> */}
            {/* <p><strong>Edition:</strong> {book.edition}</p>
            <p><strong>Subject:</strong> {book.subject}</p> */}
          </div>

          {/* Seller Info */}
          <div className="pt-6 border-t">
            <div className="flex items-center gap-4">
              <img
                src={assets.defaultAvatar}
                alt="seller"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{book.seller.name}</p>
                <button
                  onClick={() => {
                    // console.log(book.seller._id)
                    navigate(
                      `/user/dashboard/all-chats/chat/${book.seller._id}`
                    );
                  }}
                  className="mt-1 text-sm px-3 py-1 border rounded-md hover:bg-black hover:text-white transition"
                >
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Description */}
      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 md:p-10 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-2">Description</h3>
        <p className="text-sm text-gray-700 font-basefont leading-6">
          {book.description}
        </p>
      </div>
    </div>
  );
}
