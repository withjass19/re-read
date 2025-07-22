import React from "react";
// import axios from "axios";
// import BookCard from "../../components/BookCard/BookCard";
// import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductCard from "../../../components/ProductCard";
import FilterSidebar from "../../../components/FilterSidebar";
import { useAppContext } from "../../../context/AppContext";
// import BookCard from "../components/BookCard";

// import FilterSidebar from "../components/FilterSidebar";

export default function AllBooks() {
  const { products } = useAppContext();
  //   const [books, setBooks] = useState([]);

  //   useEffect(() => {
  //     const fetchBooks = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/api/books");
  //         setBooks(res.data);
  //       } catch (err) {
  //         console.error("Failed to fetch books", err);
  //       }
  //     };

  //     fetchBooks();
  //   }, []);

  //   const books = [
  //     {
  //       _id: 1,
  //       name: "The Alchemist",
  //       author: "Paulo Coelho",
  //       originalPrice: 499,
  //       sellingPrice: 199,
  //       condition: "Good",
  //       isAvailable: false,
  //       imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  //     },
  //     {
  //       _id: 2,
  //       name: "Atomic Habits",
  //       author: "James Clear",
  //       originalPrice: 599,
  //       sellingPrice: 300,
  //       condition: "New",
  //       isAvailable: false,
  //       imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  //     },
  //     {
  //       _id: 3,
  //       name: "Wings of Fire",
  //       author: "A.P.J. Abdul Kalam",
  //       originalPrice: 399,
  //       sellingPrice: 180,
  //       condition: "Used",
  //       isAvailable: false,
  //       imageUrl: "https://images.unsplash.com/photo-1544717305-996b815c338c",
  //     },
  //     {
  //       _id: 4,
  //       name: "Rich Dad Poor Dad",
  //       author: "Robert Kiyosaki",
  //       originalPrice: 350,
  //       sellingPrice: 120,
  //       condition: "Good",
  //       isAvailable: true,
  //       imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  //     },
  //   ];

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto md:pt-20">
        <h1 className="text-2xl font-semibold mb-4">📚 All Books</h1>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 sticky top-20 hidden md:block h-fit bg-white p-4 shadow rounded-lg">
            <FilterSidebar />
          </div>

          {/* Mobile Filters */}
          <div className="md:hidden bg-white p-4 shadow rounded-lg mb-4">
            <FilterSidebar />
          </div>

          {/* Book Cards */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((products, i) => (
              <ProductCard key={i} {...products} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
