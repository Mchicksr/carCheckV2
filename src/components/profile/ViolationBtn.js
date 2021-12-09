import React from 'react';
import {useDispatch} from 'react-redux'
import {addViolation,resetViolation} from '../../actions/cars'
function ViolationBtn({id,violations}) {
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Violations</h3>
            <h2>{violations}</h2>
            <button onClick={() => dispatch(addViolation(id))}>Add Violation</button>
            <button onClick={()=> dispatch(resetViolation(id))}>Reset Violation</button>
        </div>
    );
}

export default ViolationBtn;