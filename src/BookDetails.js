import React from 'react';
import { Link } from 'react-router-dom';

const BookDetails = ({b}) => {
  console.log(b)
  return (
    <div className="search-books">
      <div className="search-books-bar">
        
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          
        </div>
        <div className="book-title">{b['title']}</div>
        <div className="book-authors">{b['authors'].length >= 2 ? b['authors'].join(" and ") : b['authors']}</div>
      </div>
    
  </div> 
  )
}

export default BookDetails