import React, {useState, useEffect} from 'react';
import SafeList from '../../components/tagPage/tagCard/safeList';

const SafeListRoute = ({safe, setSafe, cars}) => {
// compare community id car com id
//console.log the list 




    return (
        <div>
            
            <SafeList safe={safe} setSafe={setSafe} cars={cars}/>
        </div>
    );
}

export default SafeListRoute;
