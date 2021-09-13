import React,{ Component } from 'react';

class ForgotPassword extends React.Component{
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
           <div className="forgotPassword">
                <h3>
                    重置密码
                </h3>
                <form className="forgotPassword">
                    <div className="row">
                        <label>
                            邮箱
                        </label>
                        <input
                            type="email"
                            value={this.props.formData.email}
                            onChange={this.props.changeFormData.bind(null, 'email')}
                        />
                    </div>
                    <div className="row actions">
                        <button
                            type="submit"
                            onClick={this.props.sendPasswordResetEmail.bind(this)}
                        >发送重置邮件</button>
                        <a
                            href="#!"
                            onClick={this.props.returnToLogin.bind(this)}
                        >返回登录</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default ForgotPassword