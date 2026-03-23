import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Detail from "./pages/Detail";
import About from "./pages/About";

import Cursor from "./components/common/Cursor";
import Loader from "./components/common/Loader";
import Cart from "./pages/Cart";

import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      {" "}
      {/* 👈 추가 */}
      <HashRouter>
        {/* <Loader />
        <Cursor /> */}

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </HashRouter>
    </CartProvider>
  );
};

export default App;
