import React,{ Component } from 'react';

class LoginForm extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
           <form
                className="login"
                onSubmit={this.props.onLogin.bind(this)}
            >
                    <div className="row">
                        <label>用户名</label>
                        <input
                            type="text"
                            onChange={this.props.changeFormData.bind(null,'username')}
                            />
                    </div>
                    <div className="row">
                        <label>密码</label>
                        <input
                            type="password"
                            onChange={this.props.changeFormData.bind(null,'password')}
                        />
                    </div>
                    <div className="row actions">
                        <button >登录</button>
                        <a
                            href="#!"
                            onClick={this.props.forgotPassword.bind(this)}
                        >
                        忘记密码?
                        </a>
                    </div>
                </form>
        )
    }
}

export default LoginForm