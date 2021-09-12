import React, { Component } from 'react'
import "../css/UserDialog.css"

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
    render() {
        let signForm = ( //注册
            <form className="sign">
                <div className="row">
                    <label>用户名</label>
                    <input
                        type="text"
                        onChange={this.changeUsername.bind(this)}
                    />
                </div>
                <div className="row">
                    <label>密码</label>
                    <input
                        type="password"
                        onChange={this.changePassword.bind(this)}
                    />
                </div>
                <div className="row actions">
                    <button>注册</button>
                </div>
            </form>
        )
        let loginForm = (  //登录
                <form className="login">
                    <div className="row">
                        <label>用户名</label>
                        <input
                            type="text"
                            onChange={this.changeUsername.bind(this)}
                            />
                    </div>
                    <div className="row">
                        <label>密码</label>
                        <input
                            type="password"
                            onChange={this.changePassword.bind(this)}
                        />
                    </div>
                    <div className="row actions">
                        <button>登录</button>
                    </div>
                </form>
        )
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <nav onChange={this.switch.bind(this)}>
                        <label>
                            <input
                            type="radio"
                            value="sign"
                            checked={this.state.selected === 'sign'}
                            />注册
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="login"
                            checked={this.state.selected === 'login'}
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