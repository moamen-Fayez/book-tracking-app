import React from 'react';
import "./App.css";
import { useState } from 'react';
import { useEffect } from 'react';
import * as BookAPI  from './BooksAPI';
import BookSelections from './BookSelections';




const ShelfofBooks = ({theNameofShelf, wholeBook, shelfChanger }) => {
   
  const handelChanger = (wholeBook, theShelf) =>{
    shelfChanger(wholeBook, theShelf);
  }
 // console.log(wholeBook);
// console.log(wholeBook);
//{console.log(b['id'])}
//const handelSubmit = (e) => {console.log(e.target.value)}//
//const handelID = (e) => {console.log(e)}//(e) => handelID(`${b['id']}`)
//handelID(`${b['id']}`)

//const objGetHandler = (e) => {console.log(e)}
  return (
    
    <div className="bookshelf">
                <h2 className="bookshelf-title">{theNameofShelf}</h2>
                
                  
                    <div className="bookshelf-books">
                    <ol className="books-grid" > 
                      {wholeBook.map((b, index) => (
                        
                          
                            
                          <li key={index}>
                            <BookSelections b={b}  handelChanger={handelChanger}/>
                           
                          </li>
                          
                        
                       ))}
                     </ol> 
                    </div>
             

              </div>
  )
}

export default ShelfofBooks;