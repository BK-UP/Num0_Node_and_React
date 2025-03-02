import React from "react";
import ReactDom from "react-dom/client";
import { PersonList } from "./components/personList";

class Greeting extends React.Component{
    render(){
        return (
            <div>
                <h2>Hello React!</h2>
            </div>
        );
    }
}

const root = ReactDom.createRoot(document.getElementById("root"));
let peopleList = [
    {name: "Troy", surname:"Barnes"},
    {name: "Abed", surname:"Nadir"}
]
root.render(<PersonList people ={peopleList}/>);