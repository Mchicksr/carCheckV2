import React, {useEffect} from 'react';
import config from '../config';
import {Link} from "react-router-dom"
import useFetch from '../hooks/useFetch';

const Signup = () => {
    const {handleGoogle, loading, error} = useFetch(
        "http://localhost:8000/signup"
    )
        console.log('id', config.GOOGLE_CLIENT_ID)
    useEffect(() => {
        if(window.google){
            window.google.accounts.id.initialize({
                // client_id: '896254418126-ga8cosfh8h2k987c1p92r2edg1hvc1nn.apps.googleusercontent.com',
                client_id:config.GOOGLE_CLIENT_ID,
                callback: handleGoogle,
            })

            window.google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
                theme: "filled_black",
                text:"continue_with",
                shape:"pill",
            })
        }
    },[handleGoogle])

    return (
        <div>
            <nav className="p-2">
                <Link to="/">Go Back</Link>
            </nav>
            <header className="text-center">
                <h1>Register to continue</h1>
            </header>
            <main className="d-flex justify-content-center col-12">
                {error && <p className='text-danger'>{error}</p>}
                {loading ? (
                    <div>Loading....</div>
                ) : (
                    <div id="signUpDiv" data-text="signup_with"></div>
                )}
            </main>
            <footer></footer>
        </div>
    );
}

export default Signup;
