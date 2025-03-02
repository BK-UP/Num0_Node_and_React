import React from "react";
export class Person extends React.Component{
    render(){
        return (
            <li>{this.props.person.name[0]}. {this.props.person.surname}</li>
        );
    }
}