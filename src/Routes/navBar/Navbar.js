import React from 'react';
import Navbar from '../../components/nav/NavBar'
function NavBar({manager}) {
    return (
        <div>
            <Navbar manager={manager}/>
        </div>
    );
}

export default NavBar;