require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const bookRoutes = require("./routes/bookRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
connectDB();

// Allow multiple origins
const allowedOrigins = ['http://localhost:5173'];

// initialize socket.io server
const io = new Server(server, {
  cors: { origin: allowedOrigins }
})

// store online users
const userSocketMap = {}

// Socket.io connection handler
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User Connected", userId) = socket.id;

  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnected", () => {
    console.log("User Disconnected", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
})

// app.use(cors());
app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(express.json());
// app.use(cookieParser);
app.use(cookieParser());

app.get("/", (req, res) => {
//   console.log("✅ CLOUDINARY API KEY:", process.env.CLOUDINARY_API_KEY);
  res.send("Hello World from ReRead Backend!");
});

app.use('/api/user', userRoutes);
app.use('/api/books', bookRoutes);
// app.use("/api/messages", messageRouter);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));