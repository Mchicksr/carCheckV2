import React from 'react';
import {useDispatch} from 'react-redux'
import {verify} from '../../actions/cars'

function Verify({id,verified}) {

    const dispatch = useDispatch()
    return (
        <div>
            <h3>Verify Status</h3>
            {verified.map(item => {
            //    console.log(item)
                return item === "" ? "not verified" : 'verified'
            })}
            <button onClick={()=> dispatch(verify(id))}>Verify</button>
        </div>
    );
}

export default Verify;