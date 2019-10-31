import React from 'react'
import '../App.css';


const Quotes = (props) =>  {
  
    return(
        <div className="Question">
            <p>{props.quote}</p>
        </div>
    )
}

export default Quotes;