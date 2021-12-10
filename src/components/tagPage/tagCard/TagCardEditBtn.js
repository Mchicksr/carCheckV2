import React from 'react';
import {Link} from 'react-router-dom'
function TagCardEditBtn({id,violations,cm,cmo,lic,color,address,modified,verified,sticker,manager}) {
    return (
        <div>
            <Link className={'TCEdit'} to={{
                pathname:`/Profile/${lic}`,
                state:{
                    id:id,
                    violations:violations,
                    cm:cm,
                    cmo:cmo,
                    lic:lic,
                    color:color,
                    address:address,
                    modified:modified,
                    verified:verified,
                    sticker:sticker,
                    manager:manager
                }
            }}>
            Edit
            </Link>
        </div>
    );
}

export default TagCardEditBtn;