import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSafeStatus } from '../../actions/safeList';
import axios from 'axios';
import { API } from '../../api';
const SafeBtn = ({ id, safe }) => {
    const dispatch = useDispatch()
    const [safeStatus, setSafeStatus] = useState(0)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
    //    console.log('money',safeStatus)
        
    }, [safeStatus]);

    const updatebtn = () => {
        setClicked(!clicked)
    }

    const verifySafeStatus = () => {
        if (safe == 0) {
            // setSafeStatus(1)
            dispatch(updateSafeStatus(id,{safe:1}))
            // dispatch(updateSafeStatus({id:id,safe:1}))
        } else if (safe == 1) {
            // setSafeStatus(0)
            // dispatch(updateSafeStatus({id:id,safe:0}))
            dispatch(updateSafeStatus(id,{safe:0}))

        }

    }

    const updateStatus = () => {
        verifySafeStatus()
        // dispatch(updateSafeStatus(id,{safe:safeStatus}))
        // axios.patch(`http://localhost:8000/cars/safe/${id}`,{safe:safeStatus})
        // API.patch(`/cars/safe/${id}`,{safe:safeStatus})
        updatebtn()
        
    }

   
    // console.log('clicked', clicked)
    return (

        <div>
            {/* {
                !clicked ? */}
                <div className="btn btn-primary" onClick={updateStatus}>update</div>
                {/* :
                <p>Safe Status has been updated</p> */}
            {/* } */}
        </div>
    );
}

export default SafeBtn;
