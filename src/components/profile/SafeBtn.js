import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSafeStatus } from '../../actions/safeList';
// import axios from 'axios';
// import { API } from '../../api';
const SafeBtn = ({ id, safe, list,remove, manager }) => {
    const dispatch = useDispatch()
    const [safeStatus] = useState(0)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
    //    console.log('money',safeStatus)
        
    }, [safeStatus]);

    const updatebtn = () => {
        setClicked(!clicked)
    }

    const verifySafeStatus = () => {
        if (safe === 0) {
            // setSafeStatus(1)
            dispatch(updateSafeStatus(id,{safe:1}))
            // dispatch(updateSafeStatus({id:id,safe:1}))
        } else if (safe === 1) {
            // setSafeStatus(0)
            // dispatch(updateSafeStatus({id:id,safe:0}))
            dispatch(updateSafeStatus(id,{safe:0}))

        }

    }

    const updateStatus = () => {
        verifySafeStatus()
        updatebtn()
            if(list){
                list()
            }
    
        
    }

   
    // console.log('clicked', manager)
    return (

        <div>
            {manager?
                <div className="btn btn-primary" onClick={updateStatus}>{remove ? remove : 'update'}</div>
            :
                null
            }
                
        </div>
    );
}

export default SafeBtn;
