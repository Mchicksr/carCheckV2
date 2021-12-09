import React from 'react';
import {Link} from 'react-router-dom'
function TagCardEditBtn({id,violations,cm,cmo,lic,color,address,modifed,verified,sticker}) {
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
                    modified:modifed,
                    verified:verified,
                    sticker:sticker
                }
            }}>
            Edit
            </Link>
        </div>
    );
}

export default TagCardEditBtn;