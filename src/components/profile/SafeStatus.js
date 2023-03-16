import React from 'react';
import { useSelector } from 'react-redux'



const SafeStatus = ({id,safe}) => {
    const cars = useSelector((state)=> state.cars)
    const newSafe = cars.map(safe => safe.safe)
    // console.log('safefromStatus',newSafe)

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
