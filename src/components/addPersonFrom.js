import React from "react";
export class AddPersonForm extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.nameInput = React.createRef();
        this.surnameInput = React.createRef();
    }
    submit(e){
        e.preventDefault();
        let name = this.nameInput.current.value;
        let surname = this.surnameInput.current.value;
        this.props.onNewPerson(name, surname);

        this.surnameInput.current.value = "";
        this.nameInput.current.value = "";
    }

    render() {
        return (
             <form onSubmit={this.submit}>
                <input type="text" ref={this.nameInput} placeholder="name"/><br/>
                <input type="text" ref={this.surnameInput} placeholder="surname"/><br/>
                <input type="submit" value="Add"/>
             </form>
        );
    }
}