import React, { Component } from 'react'

export class signup extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        email: ''
    }

    handleName = (event) => {
        this.setState({name: event.target.value})
        console.log(this.state.name)
    } 

    handleUsername = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value});
        console.log(this.state.email);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Sign up submit');
    }



    render() {
        return (
            <div>
                <p>Sign Up</p>
                <form>
                    Name: <input type='text' placeholder='Name' onChange={this.handleName}></input> <br />
                    Username: <input type='text' placeholder='Username' onChange={this.handleUsername}></input> <br />
                    Password: <input type='password' placeholder='Password' onChange={this.handlePassword}></input><br />
                    Email: <input type='text' placeholder='E-mail' onChange={this.handleEmail}></input>
                    <button type="button" onClick={this.handleSubmit}> Submit</button>
                </form>
            </div>
        )
    }
}

export default signup
