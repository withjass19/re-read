import logoBlack from "./images/logo-black.svg";
import logoWhite from './images/logo-white.svg';
import homeAbout from './images/about.jpg';
import booksBg from './images/bg-hero-123se.png';
import defaultAvatar from './images/default-profile.png'

export const assets = {
    logoBlack,
    logoWhite,
    homeAbout,
    booksBg,
    defaultAvatar,
}

export const dummyProducts = [
  {
    bookName: "Atomic Habits",
    author: "James Clear",
    originalPrice: 499,
    sellingPrice: 199,
    condition: "Good",
    category: "Self-help",
    description: "A powerful book about building good habits and breaking bad ones.",
    imageUrl: "https://caffeineberry.com/wp-content/uploads/2023/04/atomic-habits-edited-1080x1440.jpeg",
    seller: "64fc97dc6dcd2c084d63a502", // replace with real ObjectId
    available: true
  },
  {
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    originalPrice: 399,
    sellingPrice: 150,
    condition: "Like New",
    category: "Fiction",
    description: "An inspiring journey of self-discovery and destiny.",
    imageUrl: "https://target.scene7.com/is/image/Target/GUEST_aab8beb6-0d30-4d1e-a161-b6ab05fa817a?wid=600&hei=600&qlt=80&fmt=webp",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    originalPrice: 450,
    sellingPrice: 180,
    condition: "Fair",
    category: "Finance",
    description: "Learn financial independence from two very different perspectives.",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "Think Like a Monk",
    author: "Jay Shetty",
    originalPrice: 499,
    sellingPrice: 200,
    condition: "Good",
    category: "Self-help",
    description: "Train your mind for peace and purpose.",
    imageUrl: "https://i.ebayimg.com/images/g/vJ0AAOSwa01lsD5h/s-l1600.webp",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "The Psychology of Money",
    author: "Morgan Housel",
    originalPrice: 600,
    sellingPrice: 250,
    condition: "Like New",
    category: "Finance",
    description: "Timeless lessons on wealth, greed, and happiness.",
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/4/y/a/the-psychology-of-money-original-imahduzkydcp8gak.jpeg?q=70&crop=false",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    originalPrice: 350,
    sellingPrice: 120,
    condition: "Used",
    category: "Biography",
    description: "Autobiography of India's former President and missile man.",
    imageUrl: "https://sheetalonlinefashion.in/cdn/shop/files/plupd_512.webp?v=1727286030&width=1206",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "1984",
    author: "George Orwell",
    originalPrice: 399,
    sellingPrice: 160,
    condition: "Fair",
    category: "Fiction",
    description: "A dystopian novel on surveillance and totalitarianism.",
    imageUrl: "https://www.clankart.com/user-uploads/advert/1984_George_Orwell_Book_Must_Ordered1697519944250.jpg",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "Ikigai",
    author: "Héctor García",
    originalPrice: 500,
    sellingPrice: 200,
    condition: "Good",
    category: "Self-help",
    description: "The Japanese secret to a long and happy life.",
    imageUrl: "https://gainr.in/uploads/post/BD56321687113308595.jpg",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "Zero to One",
    author: "Peter Thiel",
    originalPrice: 550,
    sellingPrice: 230,
    condition: "Like New",
    category: "Startup",
    description: "Notes on startups, innovation and building the future.",
    imageUrl: "https://images.pangobooks.com/images/f73d59d6-1398-4db0-b153-8d3547bd4497?width=800&quality=85&crop=1%3A1",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  },
  {
    bookName: "Do Epic Shit",
    author: "Ankur Warikoo",
    originalPrice: 399,
    sellingPrice: 160,
    condition: "Good",
    category: "Self-help",
    description: "Lessons on success, failure, money, and life.",
    imageUrl: "https://www.clankart.com/user-uploads/advert/Reading_book1720939082919.jpg",
    seller: "64fc97dc6dcd2c084d63a502",
    available: true
  }
];

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        // "image": img1,
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        // "image": img2,
        "seen": true,
        "createdAt": "2025-04-28T10:24:05.164Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:24:08.523Z",
    }
]
