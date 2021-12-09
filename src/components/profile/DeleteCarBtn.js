import React from 'react';
import {useDispatch} from 'react-redux'
import { deleteCar } from '../../actions/cars';
function DeleteCarBtn({id}) {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(deleteCar(id))}>Delete</button>
        </div>
    );
}

export default DeleteCarBtn;