import React from 'react';
import BookDetails from './BookDetails';
import { Link, Navigation, Navigate } from 'react-router-dom';
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
//import { useNavigate } from 'react-router-dom';



//<div className='book-shelf-changer2'><Link to="bookdetails"/> </div>
const BookSelections = ({handelChanger, b}) => {

  const changeCurrentShelf =(e)=>{
    handelChanger(b, e.target.value);console.log(e.target.value)
  }

console.log(b)
  
  return (
    <div className="book">
                              <div className="book-top">
                                <div
                                  className="book-cover"
                                  style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage:
                                      `url(${b['imageLinks']['smallThumbnail']})`,
                                  }}
                                ></div>
                                
                                <div className="book-shelf-changer">
                                  <div className='book-shelf-changer2'> 
                                     <p className='moreinf'> More Info </p>
                                  </div>
                                  <div className='detHoverBook'>
                                            <div className="book-top">
                                              <div
                                                  className="book-cover" id='bcovstyl'
                                                  style={{
                                                    
                                                    backgroundImage:`url(${b['imageLinks']['smallThumbnail']})`,}}>

                                              </div>
                                              
                                            </div>  
                                            <div className="book-title">{b['title']}</div> 
                                            <div className="book-authors">author/s: {b['authors'].length >= 2 ? b['authors'].join(" and ") : b['authors']}</div> 
                                            <div className="book-title">language: {b['language']}</div> 
                                            <div className="book-title">average Rating: {b['averageRating']}</div> 
                                            <div className="book-title">publishedDate: {b['publishedDate']}</div> 

                                  </div>  
                                  <select onChange={changeCurrentShelf} value={b.shelf}>
                                    
                                    <option value="none" disabled>
                                      Move to...
                                    </option>
                                    <option value="currentlyReading">
                                      Currently Reading
                                    </option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                  
                                  
                                </div>
                              </div>
                              <div className="book-title">{b['title']}</div>
                              <div className="book-authors">{b['authors'].length >= 2 ? b['authors'].join(" and ") : b['authors']}</div>
                            </div>
  )
}

export default BookSelections