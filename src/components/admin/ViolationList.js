import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createNewViolation, deleteViolationFromList } from '../../actions/violationArr';
function ViolationList(props) {
    const violationArr = useSelector((state) => state.violationList)
    const [violationID, setViolationID] = useState("")
    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        const newViolation = {
            violation_type: e.target[0].value,
            val: { violation: e.target[0].value }
        }


        console.log('NV', newViolation)
        dispatch(createNewViolation(newViolation))
    }
    const deleteVio = () => {
        dispatch(deleteViolationFromList(violationID))
    }
    return (
        <div>
            <h1>Violation list</h1>
            <div className="container bg-dark p-5">
                <div className="row ">
                    {violationArr.map((item, index) => (
                        <div key={`33${index}`} className='col-4 mb-4'>
                            <h3>{item.violation_type}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2 className='mt-5 mb-4'>Create Violation</h2>
                    <form action="" onSubmit={handleForm}>
                        <input type="text" placeholder='violation type' /> <br />
                        <button type='submit' className='btn btn-primary my-4'>Submit</button>
                    </form>
                </div>
                <div className="col-6">
                    <h2 className='mt-5'>Delete Violation</h2>
                    <select name="community_id" id="community_id" value={violationID} onChange={(e) => setViolationID(e.target.value)}>
                    <option>---select community</option>
                    {violationArr.map((value,index) => {
                        return <option key={index} value={value._id}>{value.violation_type}</option>
                    })}
                </select> <br/>
                <button className='btn btn-danger my-4' onClick={deleteVio}>Delete</button>
                </div>
            </div>
            
         
            {/* <button onClick={handleForm}>CLICK ME</button> */}
        </div>
    );
}

export default ViolationList;