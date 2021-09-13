import React,{ Component } from 'react';

class SignForm extends React.Component{
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <form
                className="sign"
                onSubmit={this.props.onSign.bind(this)}
            >
                <div className="row">
                    <label>邮箱</label>
                    <input
                        type="email"
                        value={this.props.formData.email}
                        onChange={this.props.changeFormData.bind(null, 'email')
                        }
                    />
                </div>
                <div className="row">
                    <label>用户名</label>
                    <input
                        type="text"
                        value={this.props.formData.username}
                        onChange={this.props.changeFormData.bind(null,'username')}
                    />
                </div>
                <div className="row">
                    <label>密码</label>
                    <input
                        type="password"
                        value={this.props.formData.password}
                        onChange={this.props.changeFormData.bind(null,'password')}
                    />
                </div>
                <div className="row actions">
                    <button >注册</button>
                </div>
            </form>
        )
    }
}

export default SignForm