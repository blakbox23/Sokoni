import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Market } from "./pages/Market";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import MobileNav from "./components/MobileNav";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup"
import { Checkout } from "./pages/Checkout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import useFetchProducts from "./contexts/productsContext/productsHooks/useFetchProducts";

function App() {
  useFetchProducts()

  return (
    <ShoppingCartProvider>
        {/* <Navbar /> */}
        {/* <MobileNav /> */}
        <div style={{width: "99%", boxSizing: "border-box"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        </div>
    </ShoppingCartProvider>
  );
}

export default App;
