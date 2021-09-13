import React, { Component } from 'react';
import SignFom from './SignForm';
import LoginForm from './LoginForm';

class SignOrLogin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selected: 'login',//sign/login
        }
    }
    //注册/登录切换
    switch(e) {
        console.log(e.target.value);
        this.setState(state=>({
            selected:state.selected = e.target.value
        })
        )
    }
    render() {
        return (
             <div className="signOrLogin">
                <nav>
                    <label>
                        <input
                        type="radio"
                        value="sign"
                        checked={this.state.selected === 'sign'}
                        onChange={this.switch.bind(this)}
                        />注册
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="login"
                        checked={this.state.selected === 'login'}
                        onChange={this.switch.bind(this)}
                        />登录
                    </label>
                </nav>
                <div className="panes">
                    {this.state.selected === 'sign' ?
                        <SignFom
                            formData={this.props.formData}
                            onSign={this.props.onSign.bind(this)}
                            changeFormData={this.props.changeFormData.bind(this)}
                        />
                        : null}
                    {this.state.selected === 'login' ?
                        <LoginForm
                            onLogin={this.props.onLogin.bind(this)}
                            changeFormData={this.props.changeFormData.bind(this)}
                            forgotPassword={this.props.forgotPassword.bind(this)}
                        />
                        :
                        null}
                </div>
            </div>
        )
    }
}

export default SignOrLogin