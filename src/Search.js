import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { search } from './BooksAPI';
import BookSelections from './BookSelections';




//<ol className="books-grid">{foundBooks.map((founded, index) => <BookSelections b={founded} key={index}/> )}</ol>
//onChange={(e) =>{search(e.target.value, ).then((res) =>{setFoundBooks(res)})}}

//foundBooks.error !== Error  ? foundBooks.map((founded, index) => { return (<BookSelections b={founded} key={index}/>)} ) : <h2>not valid search word</h2> 

//if (foundBooks.error == false) {foundBooks.map((founded, index) => <BookSelections b={founded} key={index}}
//else{return <h2>not valid search word</h2>}
const Search = () => {

  const [foundBooks, setFoundBooks] = useState([]);
  const [error, setError] = useState(null);

  const SearHandler =(e)=>{
    search(e.target.value, 20).then((res) =>{setFoundBooks(res)}).then((error) => {setError(error);})
  }
console.log(error)
console.log(foundBooks)
  if (error) {
  return (<div>{null}</div>)}
  else { return (
    <div className="search-books">
    <div className="search-books-bar">
      
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={SearHandler}
        />
      </div>
    </div>
    <div className="search-books-results">
    <ol className="books-grid">{foundBooks.map((founded, index) => <BookSelections b={founded} key={index}/> )}</ol>
    </div>
  </div> 
  )
}}

export default Search