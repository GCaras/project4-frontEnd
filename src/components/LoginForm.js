import React from 'react';
import useForm from '../Hooks/LoginFormHook'

const LoginForm = () => {
    const { values, handleLoginChange, handleLoginSubmit } = useForm({email: '', password: ''}, login)

    function login() {
        console.log(values)
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <div>
                    <label>Email Address</label>
                    <div>
                        <input 
                            className="input"
                            type="email"
                            name="email"
                            onChange={handleLoginChange}
                            value={values.email}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <input 
                            className="input"
                            type="current-password"
                            name="password"
                            onChange={handleLoginChange}
                            value={values.password}
                            required
                            />
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;