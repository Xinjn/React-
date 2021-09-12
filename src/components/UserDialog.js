import React, { Component } from 'react'
import "../css/UserDialog.css"

class UserDialog extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <nav>
                        <input type="radio"/>注册
                        <input type="radio"/>登录
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