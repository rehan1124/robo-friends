import React from "react";
import './Card.css';

const Card = (props) => {
    const {id, name, email} = props;
    const htmlContent = 
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt='robots'></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>;
    return htmlContent;
}

export default Card;