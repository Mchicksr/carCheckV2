import React from 'react';
import {Link} from 'react-router-dom'
function CommunityLink({_id,name}) {
    return (
        <div className="ComLink">
        <Link className="comHref" to={`/Tags/${_id}`}>
            <h2 key={name} className="ComH">{name}</h2>
        </Link>
    </div>
    );
}

export default CommunityLink;