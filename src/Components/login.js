import React, { Component } from 'react'

export class login extends Component {
    stae = {
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
        console.log('submit');
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <form>
                    Username: <input type='text' placeholder='username' onChange={this.handleUsername}></input> <br />
                    Password: <input type='password' placeholder='password' onChange={this.handlePassword}></input>
                    <button onChange={(event) => this.handleSumbit(event)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default login
