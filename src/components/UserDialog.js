import React, { Component } from 'react'
import "../css/UserDialog.css"

class UserDialog extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selected:'sign'
        }
    }

    switch(e) {
        console.log(e.target.value);
        this.setState({
            selected:e.target.value
        })
    }

    render() {
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
                        {/* 注册 */}
                        <form className="sign">
                            <div className="row">
                                <label>用户名</label>
                                <input type="text"/>
                            </div>
                            <div className="row">
                                <label>密码</label>
                                <input type="password"/>
                            </div>
                            <div className="row actions">
                                <button>注册</button>
                            </div>
                        </form>
                        {/* 登录 */}
                        <form className="login">
                            <div className="row">
                                <label>用户名</label>
                                <input type="text"/>
                            </div>
                            <div className="row">
                                <label>密码</label>
                                <input type="password"/>
                            </div>
                            <div className="row actions">
                                <button>登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDialog