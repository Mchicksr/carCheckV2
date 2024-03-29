
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'

import { addViolation} from '../../actions/cars'
import { Button } from '@material-ui/core'
import { getViolations } from '../../actions/violation';
import { createViolation} from '../../actions/violation';
import {violations_list} from '../../actions/cars'

function ViolationBtn({ id, violations, lic }) {
    const violation_types = useSelector((state) => state.violations)
    const dispatch = useDispatch()
    const [vio, setVio] = useState(violations)
    const [violationType, setViolationType] = useState("")

    const violationData = { violation_type: violationType, carLic: lic }
    // const newarr = []
    // useEffect(() => {
    //     dispatch(getViolations())

    //     const result = violation_types.filter(item => {
    //         if (item.carLic === lic) {
    //             // console.log('cehs3',item.carLic)
    //             return item
    //         } else {
    //             // console.log('sdcs')
    //             return null
    //         }
    //     })
        
    //         // console.log('check2',result.length)
    //         setVio(result.length)
        

    // }, [vio])



    const violationArr = [
        { id: 1, violation_type: 'parking in grass' },
        { id: 2, violation_type: 'backing in' },
        { id: 3, violation_type: 'parking on street' },
        { id: 4, violation_type: 'expired license plate' },
        { id: 5, violation_type: 'not registered' },
        { id: 6, violation_type: 'expired pass' },
        { id: 7, violation_type: 'other' }

    ]
    // console.log('check',violation_types)
    // console.log('violations',violations)
    const violationCount = () => {
        const result = violation_types.filter((item,index) => {
            if (item.carLic === lic) {
                return <p className={`lo${index}`}>{item}</p>
            } else {

                return null
            }
        })
        const counter = () => {
            setVio(result.length)
            // let i =0
            // while(i < result.length){
            //     return [
            //         setVio(result.length), 

            //     ]
            // }
        }
        // setVio(result.length)
        return [
            // dispatch(resetViolation(id)),
            dispatch(createViolation({...violationData})),
            counter(),
            dispatch(addViolation({id:id, violations:vio}))

            ]

    }
    // console.log('arr', newarr.length)
    // console.log('arr', vio)
    return (
        <div>
            <button onClick={violationCount}>check</button>
            <h3>Violations</h3>
            <h3>{vio}</h3>

            {/* <Button variant="contained" color="primary" size="small" onClick={() => {return dispatch(addViolation(id)), setVio(vio + 1)}}>Add Violation</Button>
            <Button variant="contained" color="secondary" size="small" onClick={()=> {return dispatch(resetViolation(id)), setVio(0)}}>Reset Violation</Button> */}
            <h3>Violations Detail</h3>
            <select name="violation_type" id="violation_type" value={violationType} onChange={(e) => setViolationType(e.target.value)}>
                <option>Add violation</option>
                {violationArr.map((value,index )=> {
                    return <option key={`re${index}`} value={value.violation_type} >{value.violation_type}</option>
                })}
            </select> <br />
            {/* <Button variant="contained" color="secondary" size="small" onClick={()=> {return dispatch(createViolation({...violationData}))}}>Add Violation</Button> */}
            <Button variant="contained" color="secondary" size="small" onClick={violationCount}>Add Violation</Button>
            
            {violation_types.filter((item,index) => {
                if (item?.carLic === lic) {
                    
                    return item
                } else {
                    return null
                }
            }).map((item,index )=> (<div className="violation_type" key={`ma${index}`}> <div className="vPair"> <h4>Violation type:</h4><p key={index}>{item.violation_type}</p></div>  <div className="vPair"><h4>Date created</h4> <p>{format(item.modified, 'Do MMM YYYY')}</p></div> </div>))}

            
            </div>
        
    );
}

export default ViolationBtn;
