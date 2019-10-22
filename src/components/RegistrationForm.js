import React from 'react';
import useRegistrationForm from '../Hooks/RegistrationFormHooks'

const RegistrationForm = () => {
    const { values, handleRegistrationChange, handleRegistrationSubmit } = useRegistrationForm({username: '', email: '', password: '', confirmPassword: ''}, register)

    function register() {
        console.log(values)
    }

    return (
        <div className="box">
            <form onSubmit={handleRegistrationSubmit}>
            <h2>Register</h2>
            <div>
                <label>Username</label>
                <div>
                    <input
                        type="username"
                        name="username"
                        onChange={handleRegistrationChange}
                        value={values.username}
                        required
                        />
                </div>
            </div>
            <div>
                <label>Email Address</label>
                <div>
                    <input
                        type="email"
                        name="email"
                        onChange={handleRegistrationChange}
                        value={values.email}
                        required
                    />
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <input
                        type="new-password"
                        name="password"
                        onChange={handleRegistrationChange}
                        value={values.password}
                        required
                        />
                </div>
            </div>
            <div>
                <label>Confirm Password</label>
                <div>
                    <input
                        type="new-password"
                        name="confirmPassword"
                        onChange={handleRegistrationChange}
                        value={values.confirmPassword}
                        required
                        />
                </div>
            </div>
            <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;