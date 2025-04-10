import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Newsletter from "./Pages/Newsletter";
import Article from "./Pages/Article";
import "./Style/Main.scss";
import { ThemeProvider } from "./Context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Newsletter" element={<Newsletter />} />
          <Route exact path="/Article/:slug" element={<Article />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
