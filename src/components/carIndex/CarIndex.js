import React, {useState}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getWeeklyCars} from '../../actions/carIndex'
import {format} from 'date-fns'
import './carindex.css'


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
    // const showLog = () => {
    //     logs.map((log,index) => (<h3 key={index}>{log.license_plate}</h3>))
    // }
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
            <div className="">
                    {logs.map((log,index) => (
                        <div key={`30${index}`} className='log-bg'>
                            <div className='row justify-content-center gap my-2' >
                                <div className=''>
                                    <h4>License Plate</h4>
                                    <p key={index}>{log.license_plate}</p>
                                </div>
                                <div className='pl-2'>
                                    <h4>Car Make</h4>
                                    <p key={index}>{log.car_make}</p>
                                </div>
                                <div className='pl-2'>
                                    <h4>Car Model</h4>
                                    <p key={index}>{log.car_model}</p>
                                </div>
                            </div>
                            <div className="row justify-content-center gap my-2">
                                {log.violations_list.map((stick,index) => (
                                    <div key={`10${index}`} className="m-0">
                                        <h4>{`Sticker ${index + 1}`}</h4>
                                        {stick.reason.map((vio,index )=> (
                                            <div key={`20${index}`} className="">
                                                <p>{vio.violation}</p>
                                                <p>{format(vio.modified, 'Do MMM YYYY')}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default FindCarIndex;
