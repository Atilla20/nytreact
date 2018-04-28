import React from "react";

const Results = props => 
    <div className="container">
    <li className ="list-group-item">
        <h4> {props.title}</h4>
        <a href={props.url} target ="_blank">
            <button className="btn btn-default"> View Article</button>
        </a>
        <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
        <p> Date Published: {props.date}</p>
    </li>
    </div>



export default Results;
