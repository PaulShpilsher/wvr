import * as React from "react";
import "./app.scss";
import { TextEditor } from "./editor/textEditor";

const reactLogo = require("./../assets/img/react_logo.svg");


export default function() {
    return (
        <div className="app">
            <h1>Hello react</h1>
            <p>Foo to the barz</p>
            <TextEditor />
            <img src={reactLogo} height="480"/>
        </div>);
}
