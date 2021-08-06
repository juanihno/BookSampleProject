import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home ( props ) {
  const [ data, setData ] = useState()
 
  useEffect( () => {
    setData( props.data )
  }, [props.data] )
  

  if( !data ) {
    return(
      <div className="home">
        <h2>Getting data ...</h2>
      </div>
    )
  }
  else {
    const Books = data.map( (item, key) => {
      return(
        <div className="col-md-3 my-2" key={key}>
          <div className="card position-relative">
            <Link 
            className="position-absolute" 
            to={"book/" + item.id } 
            style={{top:0,bottom:0,left:0,right:0}}/>
            <img 
            src={item.cover_image} 
            className="card-img-top border border-primary" 
            alt={item.title} 
            style={{width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p style={{minHeight: '5ch'}}>{item.tagline}</p>
              <p>by {item.author}</p>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="home">
        <h2>Books</h2>
        <div className="row">
        { Books }
        </div>
      </div>
    )
  }
  
}