import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { deleteCar } from '../../actions/cars';
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
                    <button onClick={()=> setPopUp(!popUp)}>Delete</button>
                {popUp ? <>
                    <h1>Are you sure you want to delete this car?</h1>
                    <button onClick={()=> setPopUp(!popUp)}>No</button>
                    <button onClick={eraseCar}>Yes</button>
                </>
                    :null}

            </>:null}
        </div>
    );
}

export default DeleteCarBtn;