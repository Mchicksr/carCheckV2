import React from 'react';
import {format} from 'date-fns'

function CommentList({name,comment,modified}) {
    return (
        <div>
            List
            <h2>{name}</h2>
            <p>{comment}</p>
            <p className="dataL carSet">{format(modified, 'Do MMM YYYY')}</p>

        </div>
    );
}

export default CommentList;