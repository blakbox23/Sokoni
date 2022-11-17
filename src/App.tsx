import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Market } from "./pages/Market";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import MobileNav from "./components/MobileNav";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup"
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <ShoppingCartProvider>
        {/* <Navbar /> */}
        {/* <MobileNav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
