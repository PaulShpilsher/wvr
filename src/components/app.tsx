import * as React from "react";
import "./app.scss";

const reactLogo = require("./../assets/img/react_logo.svg");


export default function() {
    return (
        <div className="app">
            <h1>Hello react</h1>
            <p>Foo to the barz</p>
            <img src={reactLogo} height="480"/>
        </div>);
}
