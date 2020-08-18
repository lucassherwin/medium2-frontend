import React, { Component } from 'react'

export class login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    handlePassword = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login submit');
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <form>
                    Username: <input type='text' placeholder='username' onChange={this.handleUsername}></input> <br />
                    Password: <input type='password' placeholder='password' onChange={this.handlePassword}></input>
                    <button type="button" onClick={this.handleSubmit}> Submit</button>
                </form>
            </div>
        )
    }
}

export default login
