import React from "react";
import { Link } from "react-router-dom";

const SplashPage = (props) => {
    return (
      <div>
            <div>
                <div>
                    <h4>Connect to your favorite story-tellers</h4>
                    <p>Splash page for Dote app.</p>
                    <div>
                        <Link to="/login">Log In</Link>
                    </div>
                    <div>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SplashPage;