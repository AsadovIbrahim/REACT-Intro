import React from 'react';

const UserProfile=({username,email})=>{
    return(
        <div className="user-profile">
            <p>Username:{username}</p>
            <p>E-mail:{email}</p>
        </div>
    )
}
export default UserProfile;