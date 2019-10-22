import React from "react";
import { Link } from "react-router-dom";

function SplashPage() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        <b>Connect</b> to your favorite story-tellers
                    </h4>
                    <p className="flow-text grey-text text-darken-1">
                    Splash page for Dote app.
                    </p>
                    <br />
                    <div className="col s6">
                        <Link
                            to="/register"
                            style={{
                            width: "140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                            }}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Register
                        </Link>
                    </div>
                    <div className="col s6">
                        <Link
                            to="/login"
                            style={{
                            width: "140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                            }}
                            className="btn btn-large btn-flat waves-effect white black-text"
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SplashPage;