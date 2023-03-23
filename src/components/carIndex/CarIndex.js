import React, {useState,useEffect,useCallback }from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getWeeklyCars} from '../../actions/carIndex'
import {format} from 'date-fns'
import './carindex.css'
import { iTotal } from '../../actions/indexTotal';


const FindCarIndex = () => {
    const community = useSelector(state => state.communities)
    const logs = useSelector(state => state.cindex)
    const [comID, setComID] = useState('')
    const [para1,setpara1] = useState('')
    const [para2,setpara2] = useState('')
    const dispatch = useDispatch()

 
     // ///////// Dispatch get weekly cars/////////////////////
     const sendInfo = (e) =>{
        e.preventDefault()
        dispatch(getWeeklyCars(comID,[para1,para2]))
        
    }
    ///////////// Counts the violations ///////////////////////
    const logsArr= []
    const countViolations = () => {
       let lg = logs.map((log,index) => log.violations_list.forEach(arr => logsArr.push(arr)))
  
        return lg
    }
    countViolations()
    const lastLogsArr = []
    logsArr.map(item => item.reason.map(i => lastLogsArr.push(i)))

    /////////////////count the number of cars towed /////////////////////////

    const countTows = () => {

        let total = 0
         logs.forEach(num => {
            if(num.violations_list.length >= 3 ){
                total++
            }
        })

        return total
    }
    const totalCount = countTows()
    
    
   
    

    const carStats= useCallback(()=>{return {car_amount:logs.length, tows_total:totalCount, violation_totals:lastLogsArr.length}},[logs.length,totalCount,lastLogsArr.length])
    useEffect(() => {
    
        dispatch(iTotal(carStats()))
        return () => {
        }
        
    }, [carStats,dispatch]);

 

    return (
        <div>
            <form action="" onSubmit={sendInfo}>
                <input className="mr-3" type="date" onChange={(e)=> setpara1(e.target.value)}/>
                <input type="date" onChange={(e)=> setpara2(e.target.value)}/><br></br>
                <select className="mt-4" name="community_id" id="community_id" value={comID} onChange={(e) => setComID(e.target.value)}>
                    <option>---select community</option>
                    {community.map((value,index) => {
                        return <option key={index} value={value._id}>{value.community}</option>
                    })}
                </select> <br></br>
                    <button className='btn btn-primary my-3' type='submit'>Submit</button>
            </form>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3>Amount of cars</h3>
                        <h4>{logs.length}</h4>
                    </div>
                    <div className="col">
                        <h3>Total cars Towed</h3>
                        <h4>{totalCount}</h4>
                    </div>
                    <div className="col">
                        <h3>Total violations</h3>
                        <h4>{lastLogsArr.length}</h4>
                    </div>
                </div>
            </div>
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
