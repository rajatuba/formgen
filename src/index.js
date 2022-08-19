import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Circular from "./Circular";
import ReactForm from "./ReactForm";
import PropsParent from "./Props/PropsParent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
      <Route path="/circular" element={<Circular />} />
      <Route path="/reactform" element={<ReactForm />} />
      <Route path="/propsParent" element={<PropsParent />} />
    </Routes>
  </BrowserRouter>
);
