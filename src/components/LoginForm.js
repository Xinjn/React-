import React, { Component } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
        return (
           <form
                className="login"
                onSubmit={props.onLogin.bind(this)}
            >
                    <div className="row">
                        <label>用户名</label>
                        <input
                            type="text"
                            onChange={props.changeFormData.bind(null,'username')}
                            />
                    </div>
                    <div className="row">
                        <label>密码</label>
                        <input
                            type="password"
                            onChange={props.changeFormData.bind(null,'password')}
                        />
                    </div>
                    <div className="row actions">
                        <button >登录</button>
                        <a
                            href="#!"
                            onClick={props.forgotPassword.bind(this)}
                        >
                        忘记密码?
                        </a>
                    </div>
                </form>
        )
}