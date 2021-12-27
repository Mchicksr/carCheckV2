import React from 'react';
import {format} from 'date-fns'

function CarInfo({id,lic,cm,cmo,violations,st,address,color,modified}) {
    return (
        <div>
            <h3 className="Page-Sub">Tag</h3>
                <ul className="data">
                    <div className="carPair">
                        <h4 className="dataL carSet">License Plate</h4>
                        <li className="dataL carSet">{lic}</li>
                    </div>
                    <div className="carPair">
                        <h4 className="dataL carSet">Car Make</h4>
                        <li className="dataL carSet">{cm}</li>
                    </div>
                    <div className="carPair">
                        <h4 className="dataL carSet">Car Model</h4>
                        <li className="dataL carSet">{cmo}</li>
                    </div>
                    <div className="carPair">
                        <h4 className="dataL carSet">Color</h4>
                        <li className="dataL carSet">{color}</li>
                    </div>
                    {/* <div className="carPair">
                        <h4 className="dataL carSet">Address</h4>
                        <li className="dataL carSet">{address}</li>
                    </div> */}

                    <div className="carPair">
                        <h4 className="dataL carSet">Date Created</h4>
                        <li className="dataL carSet">{format(modified, 'Do MMM YYYY')}</li>
                    </div>
                </ul>
        </div>
    );
}

export default CarInfo;