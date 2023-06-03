import React, {useState, useEffect, useCallback} from 'react';
import { Button } from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux'

import { getSafeList } from '../../../actions/safeList';

import './safelist.css'

function SafeList({ safe, setSafe }) {
    const dispatch = useDispatch()
    const safeList = useSelector((state) => state.safeList)
    // const cars = useSelector((state)=> state.cars)
    const [commID, setCommId] = useState('')
    // console.log('safeList',cars.map(item => item))
    const Url = new URL(window.location)


    // const createId = () => {
    //     const newStr = Url.pathname.split('s/')
    //     setCommId(newStr[1])

    // }

    const createId = useCallback(()=>{
        const newStr = Url.pathname.split('s/')
        setCommId(newStr[1])
    },[Url.pathname])

    useEffect(() => {
        createId()
    }, [commID, createId]);
    // const getComId = () => {
        // dispatch(getSafeList(commID))
    // }
    // console.log('effect',commID)



    // const storeID = cars.map(item => item.community_id)
    const showSafe = () =>{
        setSafe(!safe)
        createId()
        dispatch(getSafeList(commID))
        // if(commID == storeID){
        //     console.log('click')
        // }
    }
    return (
        <div>
            <Button className={!safe ? "safe" : "safeOn"} variant="contained" size="small" onClick={showSafe}>Safe List</Button>
            <div className={`safeList ${!safe ? 'hide': null}`}>
                <h3>Safe Cars(Do Not Tag)</h3>
                <h4 className='pt-3'>Color Car Make Car Model: <br/>License Plate</h4>
                {safeList.map((list,index )=>(
                    <ul key={`10${index}`}>
                        <li className="capital" key={`19${index}`}>{list.color} {list.car_make} {list.car_model}: <br/> {list.license_plate}</li>
                        
                    </ul>
                ))}
            </div>
            {/* <button className="btn btn-primary d-block mx-auto" onClick={getComId}>Check</button> */}
        </div>
    );
}

export default SafeList;