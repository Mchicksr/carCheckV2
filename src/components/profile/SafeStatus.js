import React from 'react';

const SafeStatus = ({id,safe}) => {

    const verifyStatus = () => {

        if(safe === 1){
            return  <h3><i className="fas fa-check-circle"></i></h3>
        } else {
            return <p>not safe</p>
        }
    }
    

    return (
        <div>
            <h3>Safe Status</h3>
            {verifyStatus()}
        </div>
    );
}

export default SafeStatus;
