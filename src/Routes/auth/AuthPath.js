import React from 'react';
import Auth from '../../components/auth/Auth';
import Gauth from '../../components/auth/Gauth';
function AuthPath(props) {
    return (
        <div>
            {/* <Auth/> */}
            <Gauth/>
        </div>
    );
}

export default AuthPath;