import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import  ShelfofBooks from "./ShelfofBooks";
import { update } from "./BooksAPI"; 
import {getAll} from "./BooksAPI"; 
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import MainPage from "./MainPage";
import Search from "./Search";
import BookDetails from "./BookDetails";

function App() {
 
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/bookdetails" element={<BookDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
