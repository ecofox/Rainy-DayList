import React from 'react';
import './List.css';

export default function List(props) {

  var list = props.list.map((item, i)=>{
    return <li key={i}>{item}</li>
  })

  return(
    <div className="list">
      <h1>{props.title}</h1>
      <ul>
        {list}
      </ul>
    </div>
  )
}
