import React, { Component } from "react";
import "./Hello.css"

class Hello extends Component {
    render() {
        const returnHtml =
        <div className="tc">
            <h1>My first React-App</h1>
            <p>{this.props.greeting}</p>
        </div>;
        return returnHtml;
    } 
}

export default Hello;