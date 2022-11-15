import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Market } from "./pages/Market";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
