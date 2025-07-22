import React from "react";
import ProductCard from "../../../components/ProductCard";
// import ProductCard from "../components/ProductCard"; // 🔁 adjust path if needed
import { useAppContext } from '../../../context/AppContext'

const BooksOfTheMonth = () => {
  const { products } = useAppContext();

  // const books = Array.from({ length: 10 }).map((_, i) => ({
  //   title: `${products.title} ${i + 1}`,
  //   authorName: `Author ${i + 1}`,
  //   imageUrl: "https://placehold.co/300x400",
  //   sellingPrice: "₹199",
  //   available: "Available",
  // }));

  return (
    <div className="bg-black md:py-20 py-12 px-6">
      <h2 className="md:text-4xl sm:text-3xl text-2xl text-white font-display font-semibold mb-6 text-center">
        Books of the Month
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto font-montserrat">
        {products.map((products, i) => (
          <ProductCard key={i} {...products} />
        ))}
      </div>
    </div>
  );
};

export default BooksOfTheMonth;
