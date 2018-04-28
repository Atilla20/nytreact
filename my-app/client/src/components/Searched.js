import React from "react";

const Searched = props => 
    <div className="container">
    <li className ="list-group-item">
        <h4> {props.title}</h4>
        <a href={props.url} target ="_blank">
            <button className="btn btn-default"> View Article</button>
        </a>
        <p> Date Published: {props.date}</p>
    </li>
    </div>



export default Searched;