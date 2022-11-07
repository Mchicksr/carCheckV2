import React from 'react';
import {Link} from 'react-router-dom'

function CommunityLink({_id,name,Tab}) {
    return (
        <div >
            <Link className="text-dark"to={`/Tags/${_id}`}><Tab label={name} /></Link>
    </div>
    );
}

export default CommunityLink;