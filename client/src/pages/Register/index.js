import React from 'react';


class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
    }
    render(){

        return (
            <div className="root-container">
                <div className="box-controller">
                    <div className="controller">
                        Login
                    </div>
                    <div className="controller">
                        Register
                    </div>
                </div>
            </div>
        )
    }
   
}

class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    submitLogin(e) {

    }

    render(){

        return (
            <div className="inner-container">
                <div className="box">
                    <div className="input-group">
                        <label></label>
                        <input></input>
                    </div>
                    <div className="input-group">
                        <label></label>
                        <input></input>
                    </div>
                    <button onCLick={this.submitLogin.bind}>Login</button>
                 
                </div>
            </div>
        )
    }
    

}

class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    submitLogin(e) {
        
    }

    render(){

        return (
            <div className="inner-container">
                <div className="box">
                    <div className="input-group">
                        <label></label>
                        <input></input>
                    </div>
                    <div className="input-group">
                        <label></label>
                        <input></input>
                    </div>
                    <button onCLick={this.submitLogin.bind}>Login</button>
                 
                </div>
            </div>
        )
    }
    

}


export default Landing;
