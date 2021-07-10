import { useState, useEffect } from "react";
import axios  from "axios";
import { response } from "express";
export function Home ( props ) {
  const [ data, setData ] = useState()
  const dataURL = "http://johannes.oa4.info/php/book.php";

  useEffect( () => {
    if( !data ) {
      // fetch( dataURL
      //   // {
      //   // method: "GET",
      //   // headers: {
      //   //   "Accept": "application/json"
      //   // }
      // // }
      // ) 
      // .then( ( response ) => { 
      //   response.json()
      // })
      // .then( ( jsonData ) => { 
      //   setData(jsonData) 
      //   console.log( jsonData )
      // } )
      // .catch( (error) => { 
      //   console.log(error) 
      // })
      axios.get(dataURL).then(
        (response) => {
          setData( response.data )
        }
      )
    }
    else {
      console.log('not fetching')
    }
  })

  if( !data ) {
    return(
      <div className="home">
        <h2>Getting data ...</h2>
      </div>
    )
  }
  else {
    const Books = data.books.map( (item) => {
      return(
        <h3>{item.book_title}</h3>
      )
    })
    return(
      <div className="home">
        <h2>Books</h2>
        { Books }
      </div>
    )
  }
  
}