import React from 'react';
import useForm from '../Hooks/useLoginFormHook'
import validate from '../Hooks/useEmailValidationRules'

const errorStyle = {
    color: 'red',
    fontSize: '10px'
}

const LoginForm = () => {
    const { values, errors, handleLoginChange, handleLoginSubmit } = useForm(login, validate)

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
                            value={values.email || ''}
                            required
                        />
                        {errors.email && (
                            <p style={errorStyle}>{errors.email}</p>
                        )}
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
                            value={values.password || ''}
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