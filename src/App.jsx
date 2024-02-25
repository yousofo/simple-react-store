import Cart from "./components/cart";
import Categories from "./components/categories";
import FavList from "./components/favlist";
import Home from "./components/home";
import Layout from "./components/layout";
import Single from "./components/single";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Single />} />
          <Route path="cart" element={<Cart />} />
          <Route path="categories/:id" element={<Categories />} />
          <Route path="favlist" element={<FavList />} />
          <Route path="*" element={<h2 className="text-center">Page Not Found...</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
