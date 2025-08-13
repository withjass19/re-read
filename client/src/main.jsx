import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import { SocketProvider } from "./context/SocketContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <AppContextProvider>
          <ChatProvider>
            <App />
          </ChatProvider>
        </AppContextProvider>
      </SocketProvider>
    </BrowserRouter>
  </StrictMode>
);
