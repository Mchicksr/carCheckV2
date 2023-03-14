import React from "react";
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <>
            <header className="text-center">
                {/* <h1>Welcome to my world</h1> */}
            </header>
            <main className="d-flex justify-content-center p-2">
                <Link to="/signup" style={{
                    textDecoration: "none",
                    border: "1px solid gray",
                    padding: "0.5rem 1rem",
                    backgroundColor: "wheat",
                    color: "#333",
                }}>
                    Sign Up
                </Link>
                <Link to="/login" style={{
                    textDecoration: "none",
                    border: "1px solid gray",
                    padding: "0.5rem 1rem",
                    backgroundColor: "whitesmoke",
                    color: "#333",
                }}>Log in
                </Link>
            </main>
        </>
    )
}

export default Landing;