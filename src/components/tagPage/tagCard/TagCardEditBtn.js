import React from 'react';
import {Link} from 'react-router-dom'
function TagCardEditBtn({id,violations,cm,cmo,lic,color,address,modified,verified,sticker,manager,creator,community}) {
    return (
        <div>
            <Link className={'TCEdit'} to={{
                // pathname:`/Profile/${lic}`,
                pathname:`/Tags/${community}/${lic}`,
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
                    manager:manager,
                    creator:creator
                }
            }}>
            Edit
            </Link>
        </div>
    );
}

export default TagCardEditBtn;