import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { deleteCar } from '../../actions/cars';
import {Button} from '@material-ui/core'
import { deleteDoc, doc } from 'firebase/firestore';
function DeleteCarBtn({id,manager,creator}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const carProfile = useSelector(state => state.vProfile)
    const [popUp,setPopUp] = useState(false)
    // const docRef = doc(db,'relatedCars')

    const TheID = carProfile.map((photo) => photo.photoId);

    const filteredIDs = TheID.filter((id) => id !== undefined);
    filteredIDs.map((id) => <p key={id}>{id}</p>);
    const combinedString = filteredIDs.join(', '); // Use any separator you prefer, e.g., ', ', ' - ', etc.
    // console.log('theID',combinedString)
    const eraseCar = () => {
        dispatch(deleteCar(id))
        history.push('/Tags')
    }
    return (
        <div>
            {creator?
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