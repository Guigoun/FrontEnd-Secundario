import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Base/layout"
import Home from "./Base/home";
import Blogs from "./Base/blogs";
import Contact from "./Base/contact";
import NoPage from "./Base/nopage";

import './Base/rota.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
