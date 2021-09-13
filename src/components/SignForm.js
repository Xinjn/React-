import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
        return (
            <form
                className="sign"
                onSubmit={props.onSign.bind(this)}
            >
                <div className="row">
                    <label>邮箱</label>
                    <input
                        type="email"
                        value={props.formData.email}
                        onChange={props.changeFormData.bind(null, 'email')
                        }
                    />
                </div>
                <div className="row">
                    <label>用户名</label>
                    <input
                        type="text"
                        value={props.formData.username}
                        onChange={props.changeFormData.bind(null,'username')}
                    />
                </div>
                <div className="row">
                    <label>密码</label>
                    <input
                        type="password"
                        value={props.formData.password}
                        onChange={props.changeFormData.bind(null,'password')}
                    />
                </div>
                <div className="row actions">
                    <button >注册</button>
                </div>
            </form>
        )
}