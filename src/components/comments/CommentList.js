import React from 'react';

function CommentList({name,comment}) {
    return (
        <div>
            List
            <h2>{name}</h2>
            <p>{comment}</p>
        </div>
    );
}

export default CommentList;