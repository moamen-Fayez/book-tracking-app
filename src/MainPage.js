import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import  ShelfofBooks from "./ShelfofBooks";
import { update } from "./BooksAPI"; 
import {getAll} from "./BooksAPI"; 

import { Link } from 'react-router-dom';

{/*const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);
const headers = {
  Accept: "application/json",
  Authorization: token,
}; */}
//To Kill a Mockingbird


//console.log(get("nggnmAEACAAJ"));
{/*const getAll = () => 
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
.then((data) =>  data.books);*/}
 

 // console.log(update("Lords of Finance", "wantToRead"));

const MainPage = () => {
  

  const [booksVal, setBooksVal] = useState([]);


//using async and await with fetch, efficient and easy as explained in L4 
  const handelBookValue = () => {
    const fetchdata = async () => {
      const res = await getAll();
      setBooksVal(res);
    };
    fetchdata();
};


useEffect(() => {handelBookValue();}, []);

 //const [updtBk, setUpdtBK] = useState([]);



const shelfChanger = (bookObj, Shelf) => {
    const toChangeShelf = async () => {
      const res = await update(bookObj, Shelf);
      handelBookValue();
};
toChangeShelf();
};
  
  //console.log( updtBk);
  


  //useEffect(() => {getAll().then((books) => {setBooksVal(books)}) },[]);
  

//const handelSubmit = (e) => {setbookShelfName( e.target.value)};//
//const handelID = (e) => {setIdofTheBook( e)};//(e) => handelID(`${b['id']}`) 

  
  
  

  return (
    <div className="app">
      
        
      
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <ShelfofBooks theNameofShelf={'Currently Reading'} wholeBook={booksVal.filter((b) => b.shelf === "currentlyReading")} shelfChanger={shelfChanger} />
              <ShelfofBooks theNameofShelf={'Want To Read'} wholeBook={booksVal.filter((b) => b.shelf === "wantToRead")}  shelfChanger={shelfChanger} />
              <ShelfofBooks theNameofShelf={'Read'} wholeBook={booksVal.filter((b) => b.shelf === "read")} shelfChanger={shelfChanger} />
              
              
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" >Add a book</Link>
          </div>
        </div>
      
    </div>
  );
}

export default MainPage