import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout({ children }) {
  const location = useLocation();
   // ✅ pages where navbar/footer should NOT appear
  const hideLayoutOn = ["/sign-in", "/sign-up", "/chats", "/books/book-sell"];

  const shouldHideLayout = hideLayoutOn.includes(location.pathname);

  return (
    <>
       {!shouldHideLayout && <Navbar />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}
