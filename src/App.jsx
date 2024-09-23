import React from 'react';
import Popular from "./components/popular/Popular.jsx";
import Navbar from "./components/navbar/Navbar";
import Backdrop from "./components/backdrop/Backdrop";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Backdrop />
      <div id="popular">
        <Popular />
      </div>
      <div id="search">
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
