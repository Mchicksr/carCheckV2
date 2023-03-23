import React from 'react';
// import CommunityNav from '../../components/tagPage/community/CommunityNav';
import FindCarIndex from '../../components/carIndex/CarIndex';
import LogCsv from '../../components/carIndex/LogCsv';

// import ''
const CarIndex = () => {
    return (
        <div>
            {/* <CommunityNav/> */}
            <h1>index</h1>
           <div className="pb-3"><LogCsv/></div> 
            <FindCarIndex/>
        </div>
    );
}

export default CarIndex;
