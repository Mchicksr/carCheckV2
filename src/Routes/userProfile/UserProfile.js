import React from 'react';

function UserProfile(props) {
    const user = JSON.parse(localStorage.getItem('profile'))

   
    return (
        <div>
            {!user ? <h1>Welcome!</h1> :<h1> Welcome {user.result.name}</h1>}
        </div>
    );
}

export default UserProfile;