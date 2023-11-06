import React from 'react';
import Email from '../../components/towForm/Email'
const Emails = ({manager}) => {
    return (
        <div className="py-5" style={{backgroundColor: "#343a4094"}}>
            {manager ? 
            <Email/>
            
            : 
                <h1>Authorized Personal Only</h1>
            }
        </div>
    );
}

export default Emails;
