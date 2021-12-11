import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { deleteCar } from '../../actions/cars';
import {Button} from '@material-ui/core'

function DeleteCarBtn({id,manager}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [popUp,setPopUp] = useState(false)
    
    const eraseCar = () => {
        dispatch(deleteCar(id))
        history.push('/Tags')
    }
    return (
        <div>
            {manager?
            <>
                    <Button variant="contained" color="secondary" size="small" onClick={()=> setPopUp(!popUp)}>Delete</Button>
                {popUp ? <>
                    <h1>Are you sure you want to delete this car?</h1>
                    <Button variant="contained" color="primary" size="small" onClick={()=> setPopUp(!popUp)}>No</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={eraseCar}>Yes</Button>
                </>
                    :null}

            </>:null}
        </div>
    );
}

export default DeleteCarBtn;