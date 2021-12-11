import React from 'react';
import {Link} from 'react-router-dom';

function TowBtn({lic,cm,cmo,st,color,address}) {
    return (
        <div>
            <div className="towButton">
                    <div className="towcontainer">
                    <i className="fas fa-truck-pickup"></i>
                        <Link className="tow" to={{
                            pathname: `/TowForm/${lic}`,
                            state: {
                                Lic: lic,
                                cm: cm,
                                cmo: cmo,
                                St: st,
                                color:color,
                                address:address,
                            }
                        }}>Tow</Link><br />
                    </div>
                </div>
        </div>
    );
}

export default TowBtn;