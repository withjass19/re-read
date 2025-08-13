import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/books" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  // const { navigate } = useAppContext()

  // const matchedRoutes = [
  //   "/books", 
  //   "/books/all-books", 
  //   "/books/book-detailes", 
  //   "/user/account", 
  //   "/user/dashboard",
  //   "/user/dashboard/upload-book",
  //   "/user/dashboard/your-published",
  //   "/user/dashboard/all-chats",
  // ];
  // const isMatched = matchedRoutes.includes(path);
  const isMatched = path !== "/";


  // const isBooksPage = path === "/books";
  // const isAllBooksPage = path === "/books/all-books";
  // const isBookDetailPage = path === "/books/book-detailes";

  const { user, setUser, setShowUserLogin, navigate, axios } = useAppContext();

  const logout = async () => {
    // setUser(null);
    // localStorage.clear();
    // navigation("/");
    try {
      const { data } = await axios.get('/api/user/logout');
      if(data.success){
        toast.success(data.message)
        setUser(null);
        setShowUserLogin(null);
        navigate("/");
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-12 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled || isMatched
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-4"
          : "py-6"
      }`}
    >
      {/* Logo */}
      <NavLink to="/">
        <img
          src={
            isScrolled || isMatched
              ? assets.logoBlack
              : assets.logoWhite
          }
          className="w-36 md:w-28"
          alt="logo"
        />
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 text-base font-medium">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              `group flex flex-col gap-0.5 transition ${
                isScrolled || isMatched
                  ? "text-gray-800"
                  : "text-white/80"
              } ${isActive ? "font-bold" : ""}`
            }
          >
            {link.name}
            <div
              className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled || isMatched
                  ? "bg-gray-800"
                  : "bg-white/80"
              }`}
            />
          </NavLink>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {/* Search Icon */}
        <svg
          className={`h-6 w-6 transition-all duration-500 ${
            isScrolled || isMatched
              ? "text-black"
              : "text-white"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {user && (
          <NavLink to="/user/dashboard/upload-book">
            <button
              className={`px-8 py-1.5 rounded-full ml-4 transition-all duration-500 ${
                isScrolled || isMatched
                  ? "text-black border-black border-2 bg-transparent"
                  : "text-white border-2 border-white bg-transparent"
              }`}
            >
              Sell
            </button>
          </NavLink>
        )}

        {!user ? (
          <NavLink to="/sign-in">
            <button
              onClick={() => setShowUserLogin(true)}
              className={`px-8 py-1.5 rounded-full ml-4 transition-all duration-500 ${
                isScrolled || isMatched
                  ? "text-white bg-black"
                  : "bg-white text-black border-2"
              }`}
            >
              Login
            </button>
          </NavLink>
        ) : (
          // <button
          //   onClick={logout}
          //   className={`px-8 py-2 rounded-full ml-4 transition-all duration-500 ${
          //     isScrolled || isBooksPage || isBookDetailPage || isAllBooksPage
          //       ? "text-white bg-black"
          //       : "bg-white text-black"
          //   }`}
          // >
          //   Logout
          // </button>

          <div className="relative group">
              {/* Profile icon */}
              <div className="w-10 h-10 border-2 border-black rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={assets.defaultAvatar}
                  alt="Profile"
                  className="w-full h-full rounded-full border border-black object-cover cursor-pointer"
                />
              </div>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="px-4 py-3 border-b font-semibold">
                  {/* {username} */}
                  {user.name}
                </div>
                <ul className="text-sm text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onClick={() => navigate("/user/account")}
                  >
                    {/* <UserRound size={16} />  */}
                    Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onClick={() => navigate("/user/dashboard")}
                  >
                    {/* <LayoutDashboard size={16} />  */}
                    Dashboard
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    // onClick={() => navigate("/settings")}
                  >
                    {/* <Settings size={16} />  */}
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-red-600"
                    // onClick={handleLogout}
                    onClick={logout}
                  >
                    {/* <LogOut size={16} />  */}
                    Logout
                  </li>
                </ul>
              </div>
            </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(true)}
          className={`h-6 w-6 cursor-pointer ${
            isScrolled || isMatched
              ? "text-black"
              : "text-white"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg"
          >
            {link.name}
          </NavLink>
        ))}

        {user && (
          <NavLink to="/sell">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white px-8 py-2.5 rounded-full"
            >
              Sell
            </button>
          </NavLink>
        )}
        {!user ? (
          <button
            onClick={() => {
              setShowUserLogin(true);
              setIsMenuOpen(false);
            }}
            className="bg-black text-white px-8 py-2.5 rounded-full"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              logout();
              setIsMenuOpen(false);
            }}
            className="bg-black text-white px-8 py-2.5 rounded-full"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
