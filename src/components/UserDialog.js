import React, { Component } from 'react'
import "../css/UserDialog.css"
import {Login, Sign, sendPasswordResetEmail} from './leanCloud'
import ForgotPassword from './ForgotPassword'
import SignOrLogin from './SignOrLogin'


class UserDialog extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selectTab:'signOrLogin',//forgotPassword
            formData: {
                email:'',
                username: '',
                password: ''
            }
        }
    }

    /*
    changeUsername(e) {
        let name = e.target.value
        this.setState(state => ({
            username:state.formData.username = name
        }))
        
    }
    changePassword(e) {
        let password = e.target.value
        this.setState(state => ({
            username:state.formData.password = password
        }))
    }
    */
    //实时更新数据：将 changeUserName 和 changePassword 优化成一个函数 changeFormData
    changeFormData(key,e) {
        let value = e.target.value
        this.setState(state => ({
            key:state.formData[key] = value
        }))
    }

    //注册
    onSign(e) {
        e.preventDefault();//阻止默认事件跳转
        console.log('注册');
        let { email, username, password } = this.state.formData
        if (!username) {
            return alert('请输入用户名')
        } else if(username.length < 3){
            return alert('用户名必须大于三个字符')
        }
        if (!password) {
            return alert('请输入密码')
        } else if(password.length < 6){
            return alert('密码必须不小于6个字符')
        }
        let success = (user) => {
            this.props.onSign.call(null,user)
        }
        let error = (error) => {
            switch (error.code) {
                case 202:
                    alert('用户名已被占用')
                    break;
                case 400:
                    alert('找不到用户')
                    break;
                default:
                    alert(error)
                    break;
            }
        }
        Sign(
            email,
            username,
            password,
            success,
            error
        )
    }

    //登录
    onLogin(e) {
        e.preventDefault();//阻止默认事件跳转
        console.log('登录');
        let { username, password } = this.state.formData
        if (!username) { return alert('请输入用户名') }
        if(!password){return alert('请输入密码')}
        let success = (user) => {
            this.props.onLogin.call(null,user)
        }
        let error = (error) => {
            switch (error.code) {
                case 210:
                    alert('用户名与密码不匹配')
                    break;
                case 211:
                    alert('找不到用户')
                    break;
                case 219:
                    alert('用户名与密码不匹配')
                    break;
                default:
                    alert(error)
                    break;
            }
            console.log(error.code);
        }
        Login(
            username,
            password,
            success,
            error
        )
    }

    //切换重置密码组件
    forgotPassword() {
        console.log('forgotPassword');
        this.setState(state => ({
            selectTab:state.selectTab = 'forgotPassword'
        }))
    }

    //发送重置邮件
    sendPasswordResetEmail(e) {
        console.log('发送重置邮件')
        e.preventDefault()
        console.log(this.state.formData.email);
        sendPasswordResetEmail(this.state.formData.email)
    }

    //返回登录
    returnToLogin() {

        this.setState(state => ({
            selectTab:state.selectTab = 'signOrLogin'
        }))
    }

    render() {
        //注册页面
        /*
        let signForm = ( 
            <form
                className="sign"
                onSubmit={this.onSign.bind(this)}
            >
                <div className="row">
                    <label>邮箱</label>
                    <input
                        type="email"
                        value={this.state.formData.email}
                        onChange={this.changeFormData.bind(this, 'email')
                        }
                    />
                </div>
                <div className="row">
                    <label>用户名</label>
                    <input
                        type="text"
                        value={this.state.formData.username}
                        onChange={this.changeFormData.bind(this,'username')}
                    />
                </div>
                <div className="row">
                    <label>密码</label>
                    <input
                        type="password"
                        value={this.state.formData.password}
                        onChange={this.changeFormData.bind(this,'password')}
                    />
                </div>
                <div className="row actions">
                    <button >注册</button>
                </div>
            </form>
        )
        */
        //登录页面
        /*
        let loginForm = ( 
            <form
                className="login"
                onSubmit={this.onLogin.bind(this)}
            >
                    <div className="row">
                        <label>用户名</label>
                        <input
                            type="text"
                            onChange={this.changeFormData.bind(this,'username')}
                            />
                    </div>
                    <div className="row">
                        <label>密码</label>
                        <input
                            type="password"
                            onChange={this.changeFormData.bind(this,'password')}
                        />
                    </div>
                    <div className="row actions">
                        <button >登录</button>
                        <a
                            href="#!"
                            onClick={this.forgotPassword.bind(this)}
                        >
                        忘记密码?
                        </a>
                    </div>
                </form>
        )
        */
        //合并注册登录页面
        /*
        let signOrLogin = (
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
                            formData={this.state.formData}
                            onSign={this.onSign.bind(this)}
                            changeFormData={this.changeFormData.bind(this)}
                        />
                        : null}
                    {this.state.selected === 'login' ?
                        <LoginForm
                            onLogin={this.onLogin.bind(this)}
                            changeFormData={this.changeFormData.bind(this)}
                            forgotPassword={this.forgotPassword.bind(this)}
                        />
                        :
                        null}
                </div>
            </div>
        )
        */
        //重置页面
        /*
        let forgotPassword = (
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
                            value={this.state.formData.email}
                            onChange={this.changeFormData.bind(this, 'email')}
                        />
                    </div>
                    <div className="row actions">
                        <button
                            type="submit"
                            onClick={this.sendPasswordResetEmail.bind(this)}
                        >发送重置邮件</button>
                        <a
                            href="#!"
                            onClick={this.returnToLogin.bind(this)}
                        >返回登录</a>
                    </div>
                </form>
            </div>
        )
        */
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    {this.state.selectTab === 'signOrLogin'
                        ?
                        <SignOrLogin
                            formData={this.state.formData}
                            onSign={this.onSign.bind(this)}
                            onLogin={this.onLogin.bind(this)}
                            changeFormData={this.changeFormData.bind(this)}
                            forgotPassword={this.forgotPassword.bind(this)}
                        />
                        :
                            <ForgotPassword
                                formData={this.state.formData}
                                changeFormData={this.changeFormData.bind(this, 'email')}
                                sendPasswordResetEmail={this.sendPasswordResetEmail.bind(this)}
                                returnToLogin={this.returnToLogin.bind(this)}
                            />
                        }
                </div>
            </div>
        )
    }
}

export default UserDialog