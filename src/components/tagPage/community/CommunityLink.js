import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'

function CommunityLink({_id,name,Tab,setCommuteId}) {
    useEffect(() => {
        setCommuteId(_id)
      
    }, [])
    console.log('commuteID',_id)
    // console.log('TestRoute',routerProps.match.params)
    return (
        <div >
            <Link class="ComLink"to={`/Tags/${_id}`}><Tab label={name} /></Link>
    </div>
    );
}

export default CommunityLink;