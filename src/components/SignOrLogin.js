import React, { Component } from 'react';
import SignFom from './SignForm';
import LoginForm from './LoginForm';

class SignOrLogin extends React.Component{
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
             <div className="signOrLogin">
                <nav>
                    <label>
                        <input
                        type="radio"
                        value="sign"
                        checked={this.props.selected === 'sign'}
                        onChange={this.props.switch.bind(this)}
                        />注册
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="login"
                        checked={this.props.selected === 'login'}
                        onChange={this.props.switch.bind(this)}
                        />登录
                    </label>
                </nav>
                <div className="panes">
                    {this.props.selected === 'sign' ?
                        <SignFom
                            formData={this.props.formData}
                            onSign={this.props.onSign.bind(this)}
                            changeFormData={this.props.changeFormData.bind(this)}
                        />
                        : null}
                    {this.props.selected === 'login' ?
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