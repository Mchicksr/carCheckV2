import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux'
import {addViolation,resetViolation} from '../../actions/cars'
import {Button} from '@material-ui/core'
function ViolationBtn({id,violations}) {
    const dispatch = useDispatch()
    const [vio,setVio] = useState(violations)
    useEffect(() => {
       
    }, [vio])
    return (
        <div>
            <h3>Violations</h3>
            <h3>{vio}</h3>
            <Button variant="contained" color="primary" size="small" onClick={() => {return dispatch(addViolation(id)), setVio(vio + 1)}}>Add Violation</Button>
            <Button variant="contained" color="secondary" size="small" onClick={()=> {return dispatch(resetViolation(id)), setVio(0)}}>Reset Violation</Button>
        </div>
    );
}

export default ViolationBtn;