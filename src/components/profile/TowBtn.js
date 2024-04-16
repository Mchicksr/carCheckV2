import React from 'react';
import {Link} from 'react-router-dom';

function TowBtn({id, lic,cm,cmo,st,color,address,ComId,violations_list}) {
    return (
        <div>
            <div className="towButton">
                    <div className="towcontainer">
                    <i className="fas fa-truck-pickup"></i>
                        <Link className="tow" to={{
                            pathname: `/TowForm/${lic}`,
                            state: {
                                id:id,
                                Lic: lic,
                                cm: cm,
                                cmo: cmo,
                                St: st,
                                color:color,
                                address:address,
                                ComId:ComId,
                                violations_list:{violations_list}
                            }
                        }}>Tow</Link><br />
                    </div>
                </div>
        </div>
    );
}

export default TowBtn;