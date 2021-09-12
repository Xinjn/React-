import React, { Component } from 'react'

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
                    <div>
                        {/* 注册 */}
                        <form className="sign">
                            <div>
                                <label>用户名</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>密码</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <button>注册</button>
                            </div>
                        </form>
                        {/* 登录 */}
                        <form className="login">
                            <div>
                                <label>用户名</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label>密码</label>
                                <input type="text"/>
                            </div>
                            <div>
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