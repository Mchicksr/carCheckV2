import React from 'react';
import {useDispatch} from 'react-redux'
import {addViolation,resetViolation} from '../../actions/cars'
import {Button} from '@material-ui/core'
function ViolationBtn({id,violations}) {
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Violations</h3>
            <h2>{violations}</h2>
            <Button variant="contained" color="primary" size="small" onClick={() => dispatch(addViolation(id))}>Add Violation</Button>
            <Button variant="contained" color="secondary" size="small" onClick={()=> dispatch(resetViolation(id))}>Reset Violation</Button>
        </div>
    );
}

export default ViolationBtn;