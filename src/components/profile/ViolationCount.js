import React, { useState } from 'react';
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns'
import { violationList, deleteViolationAction } from '../../actions/cars';

// import { violationArr } from '../violations/violationList';


const ViolationCount = ({ id,violations_list, lic, communityID, comID,manager }) => {
    // const [violationNum,  setViolationNum] = useState(0)
    const violationArr = useSelector((state) => state.violationList)

    const [openSelect, setOpenSelect] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [violationType2, setViolationType2] = useState([])
    // const [selectedOption, setSelectedOption] = useState(0)
    const [selectedOption, setSelectedOption] = useState(0)
    // const [changeValue, setChangeValue] = useState('')
    const [immidiateTow, setImmidiateTow] = useState(false)
    const cars = useSelector((state) => state.cars)
    const dispatch = useDispatch()


  

    const newNum = cars?.filter((car) => {
        if (car.community_id === comID) {
            return car
        }
    }).map(num => num.violations_list.length)

    // const handleCheckboxChange = (e) => {
    //     let newArr = [...violationType2, e.target.id]
    //     if (violationType2.includes(e.target.id)) {
    //         newArr = newArr.filter(vio => vio !== e.target.id)
    //     }
    //     setViolationType2(newArr)
    // }
    const handleCheckboxChange = (e) =>{
        let transorm = {"violation": e.target.id}
        let jsonViolation = JSON.stringify(transorm);
         // let newArr = [...violationType2, e.target.id]
         let newArr = [...violationType2, jsonViolation]
         if(violationType2.includes(e.target.id)){
             newArr = newArr.filter(vio => vio !==  e.target.id)
         }
             console.log('narr',newArr)
       
         setViolationType2(newArr)
        
     }
    const showViolations = () => {
        const input = (vio) => {
            return vio.reason.map((item, index) => (
                <div key={`fe${index}`}>
                    <p key={index}>{item.violation}<span className='pl-3'>{ format(item.modified, 'Do MMM YYYY H:mm a')}</span></p>
                </div>
            ))
        }
        const stickerI = (vio, index) => {
            return <h5 key={`lk${index}`}>{vio.sticker ? `sticker ${index + 1}` : `no Sticker`}</h5>
        }
        const list = violations_list.map((vio, index) => { return [stickerI(vio, index), input(vio)] })
        return list
    }
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
        
    }

    const deleteViolation = (e) => {
        dispatch(deleteViolationAction(id,{index:selectedOption}))
    }
    // console.log('manager',manager)
    return (
        <div>
            violation count
            <h2 className={newNum >= 3 ? 'violation-status-error' : null}>{newNum >= 3 ? "Tow" : newNum}</h2>
            {showViolations()}
            <button className='btn btn-primary' onClick={() => setOpenSelect(!openSelect)}>Select Violation</button>
            <button className="btn btn-danger ml-2" onClick={()=>setImmidiateTow(!immidiateTow)}>Force Tow</button>            {manager ?
            <button className='btn btn-secondary ml-2' onClick={() => setOpenDelete(!openDelete)}>Delete Violation</button>
            :
            null
            }

            {
                openSelect ?
                    <div className="container">
                        <div className="position-relative">
                            {violationArr.map((item, index) => (
                                <div key={`33${index}`}>
                                    <label>{item.violation_type}</label>
                                    {/* <input type="checkbox" id={item.val} value={item.val} onChange={handleCheckboxChange} /> */}
                                    <input type="checkbox" id={item.val.violation} value={item.val.violation} onChange={handleCheckboxChange}/>

                                </div>
                            ))}
                            <button className='btn btn-primary' onClick={() => { return dispatch(violationList(lic, violationType2)) }}>Add Violations</button>
                        </div>
                    </div>
                    :
                    null
            }
            {
                openDelete ?
                    <>
                        <h2>Delete</h2>
                        <Form>
                        {[ 'radio'].map((type,index) => (

                        <div className="" key={`${index}`}>

                          {  violations_list.map((vio, index) => (
                                <div className="" key={`${index}9ds`}>
                                    <h3 className='mr-3'>Sticker {index + 1}
                                         
                                        <>
                                        
                                        <Form.Check
                                        inline
                                        name="group2"
                                        type={type}
                                        id={`inline-${type}-${index+1}`}
                                        value={index}
                                        onChange={handleOptionChange}
                                        />
                                    
                                        </>
                               
                                    </h3>
                                    {vio.reason.map((item, index) => (
                                        <div className="" key={`${index}idj`}>
                                            <p>{item.violation}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        ))}
                    </Form>
                        {
                            manager ?
                            <>
                            <button className="btn btn-danger" onClick={deleteViolation}>Delete</button>
                            </>
                            :
                            // <button className="btn btn-danger" onClick={deleteViolation}>Delete</button>
                            null
                        }
                    </>

                    :
                    null
            }
   
        </div>
    );
}

export default ViolationCount;
