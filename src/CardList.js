import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {

    const htmlContent = 
    robots.map((users) => {
        return (<Card
        key={users.id}
        id={users.id}
        name={users.name}
        email={users.email}/>)
    });

    return <div>{htmlContent}</div>;
}

export default CardList;