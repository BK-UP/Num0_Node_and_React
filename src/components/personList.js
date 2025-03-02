import React from "react";
import {Person} from "./Person.js"
import {AddPersonForm} from "./addPersonFrom.js";
export class PersonList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people:this.props.people|| []
        }
        this.addPerson = this.addPerson.bind(this);
    }

    addPerson(name, surname){
        this.setState({people: [...this.state.people, {name, surname}]});
    }
    render(){
        return(
            <div className="container">
                <h1>{this.state.people.length} in the list:</h1>
                <ul>
                    {this.state.people.map((person,i) =><Person key={i} person={person}/>)}
                </ul>
                <div>
                    <AddPersonForm onNewPerson={this.addPerson}/>
                </div>
            </div>
        );
    }
}