import React, { Component } from 'react'
import "../css/UserDialog.css"
import {Login, Sign} from './leanCloud'

class UserDialog extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selected: 'sign',
            formData: {
                username: '',
                password: ''
            }
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
    //将 changeUserName 和 changePassword 优化成一个函数 changeFormData
    changeFormData(key,e) {
        let value = e.target.value
        this.setState(state => ({
            key:state.formData[key] = value
        }))
    }
    onSign(e) {
        e.preventDefault();//阻止默认事件跳转
        console.log('注册');
        let { username, password } = this.state.formData
        let success = (user) => {
            this.props.onSign.call(null,user)
        }
        let error = (error) => {
            console.log(error);
        }
        Sign(
            username,
            password,
            success,
            error
        )
    }
    onLogin(e) {
        e.preventDefault();//阻止默认事件跳转
        console.log('登录');
        let { username, password } = this.state.formData
        let success = (user) => {
            this.props.onLogin.call(null,user)
        }
        let error = (error) => {
            console.log(error);
        }
        Login(
            username,
            password,
            success,
            error
        )
    }
    render() {
        let signForm = ( //注册
            <form
                className="sign"
                onSubmit={this.onSign.bind(this)}
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
                    <button >注册</button>
                </div>
            </form>
        )
        let loginForm = ( //登录
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
                    </div>
                </form>
        )
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
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
                        {this.state.selected === 'sign' ? signForm:null}
                        {this.state.selected === 'login' ? loginForm:null}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDialog