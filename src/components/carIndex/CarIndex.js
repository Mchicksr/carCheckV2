import React, {useState}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getWeeklyCars} from '../../actions/carIndex'

const FindCarIndex = () => {
    const community = useSelector(state => state.communities)
    const logs = useSelector(state => state.cindex)
    const [comID, setComID] = useState('')
    const [para1,setpara1] = useState('')
    const [para2,setpara2] = useState('')
    const dispatch = useDispatch()
    console.log('comm',community)
    console.log('reacommute',comID)

    const sendInfo = (e) =>{
        e.preventDefault()
        dispatch(getWeeklyCars(comID,[para1,para2]))
    }
    // console.log('logs',logs)
    const showLog = () => {
        logs.map((log,index) => (<h3 key={index}>{log.license_plate}</h3>))
    }
    return (
        <div>
            <form action="" onSubmit={sendInfo}>
                <input type="date" onChange={(e)=> setpara1(e.target.value)}/>
                <input type="date" onChange={(e)=> setpara2(e.target.value)}/>
                <select name="community_id" id="community_id" value={comID} onChange={(e) => setComID(e.target.value)}>
                    <option>---select community</option>
                    {community.map((value,index) => {
                        return <option key={index} value={value._id}>{value.community}</option>
                    })}
                </select> 
                    <button className='btn btn-primary' type='submit'>Submut</button>
            </form>
            {logs.map((log,index) => (<h3 key={index}>{log.license_plate}</h3>))}
        </div>
    );
}

export default FindCarIndex;
