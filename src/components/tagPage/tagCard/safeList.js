import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux'

import { getSafeList } from '../../../actions/safeList';

import './safelist.css'

function SafeList({ safe, setSafe }) {
    const dispatch = useDispatch()
    const safeList = useSelector((state) => state.safeList)
    const [commID, setCommId] = useState('')
    
    const Url = new URL(window.location)


    const createId = () => {
        const newStr = Url.pathname.split('s/')
        setCommId(newStr[1])

    }

    useEffect(() => {
        createId()
        // dispatch(getSafeList(commID))
    }, [commID, createId]);
    // console.log('commid',commID)
    const getComId = () => {
        dispatch(getSafeList(commID))
    }
    return (
        <div>
            <Button className={!safe ? "safe" : "safeOn"} variant="contained" size="small" onClick={() => setSafe(!safe)}>Safe List</Button>
            <div className={`safeList ${!safe ? 'hide': null}`}>
                <h3>Safe Cars(Do Not Tag)</h3>
                {safeList.map((list,index )=>(
                    <ul key={`10${index}`}>
                        <li key={`19${index}`}>{list.license_plate}</li>
                        
                    </ul>
                ))}
            </div>
            <button className="btn btn-primary d-block mx-auto" onClick={getComId}>Check</button>
        </div>
    );
}

export default SafeList;