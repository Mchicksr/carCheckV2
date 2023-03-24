import React from 'react';
// import CommunityNav from '../../components/tagPage/community/CommunityNav';
import FindCarIndex from '../../components/carIndex/CarIndex';
import LogCsv from '../../components/carIndex/LogCsv';

// import ''
const CarIndex = ({manager}) => {
    console.log('manager',manager)
    return (
        <div>
            {manager ?
                <>
                    <h1>index</h1>
                <div className="pb-3"><LogCsv/></div> 
                    <FindCarIndex/>  
                </>
                :
                <><h1>Authorized Personal Only</h1></>
           
            }
        </div>
    );
}

export default CarIndex;
