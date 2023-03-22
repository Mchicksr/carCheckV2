import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns'
import { violationList } from '../../actions/cars';


const ViolationCount = ({violations_list,lic}) => {
    // const [violationNum,  setViolationNum] = useState(0)
    const [openSelect, setOpenSelect] = useState(false)
    const [violationType2,setViolationType2] = useState([])
    const cars = useSelector((state) => state.cars)
    const dispatch = useDispatch()
    


    const violationArr = [
        {id:1,violation_type:"parking in grass", val:`{"violation": "parking in grass"}`},
        {id:2,violation_type:"backing in",val:`{"violation": "backing in"}`},
        {id:3,violation_type:"parking on street",val:`{"violation": "parking on street"}`}, 
        {id:4,violation_type:"expired license plate",val:`{"violation": "expired license plate"}`},
        {id:5,violation_type:"not registered",val:`{"violation":"not registered" }`},
        {id:7,violation_type:"expired pass",val:`{"violation": "expired pass"}`},
        {id:8,violation_type:"commercial vehicle" ,val:`{"violation": "commercial vehicle"}`},
        {id:9,violation_type:"other",val:`{"violation": "other"}`}
    
    ]
    // const violationArr = [
    //     {id:1,violation_type:"parking in grass", val:`{"reason": "parking in grass"}`},
    //     {id:2,violation_type:"backing in",val:`{"reason": "backing in"}`},
    //     {id:3,violation_type:"parking on street",val:`{"reason": "parking on street"}`}, 
    //     {id:4,violation_type:"expired license plate",val:`{"reason": "expired license plate"}`},
    //     {id:5,violation_type:"not registered",val:`{"reason":"not registered" }`},
    //     {id:7,violation_type:"expired pass",val:`{"reason": "expired pass"}`},
    //     {id:8,violation_type:"commercial vehicle" ,val:`{"reason": "commercial vehicle"}`},
    //     {id:9,violation_type:"other",val:`{"reason": "other"}`}
    
    // ]
    // const violationArr = [
    //     {id:1,violation_type:"parking in grass", val:`{"sticker":"true","reason":[{"violation": "parking in grass"}]}`},
    //     {id:2,violation_type:"backing in",val:`{"sticker":"true","reason":[{"violation": "backing in"}]}`},
    //     {id:3,violation_type:"parking on street",val:`{"sticker":"true","reason":[{"violation": "parking on street"}]}`}, 
    //     {id:4,violation_type:"expired license plate",val:`{"sticker":"true","reason":[{"violation": "expired license plate"}]}`},
    //     {id:5,violation_type:"not registered",val:`{"sticker":"true","reason":[{"violation":"not registered" }]}`},
    //     {id:7,violation_type:"expired pass",val:`{"sticker":"true","reason":[{"violation": "expired pass"}]}`},
    //     {id:8,violation_type:"commercial vehicle" ,val:`{"sticker":"true","reason":[{"violation": "commercial vehicle"}]}`},
    //     {id:9,violation_type:"other",val:`{"sticker":"true","reason":[{"violation": "other"}]}`}
    
    // ]
  
  

    const newNum = cars?.map(num => num.violations_list.length)
    console.log('NEWNUM', newNum)
    const handleCheckboxChange = (e) =>{
       
        let newArr = [...violationType2, e.target.id]
        if(violationType2.includes(e.target.id)){
            newArr = newArr.filter(vio => vio !==  e.target.id)
        }
        
        setViolationType2(newArr)
       
    }

    const showViolations = () => {
        const input = (vio) =>{
            return vio.reason.map((item,index)=> (
                <div key={`fe${index}`}>
                    <p key={index}>{item.violation}<span className='pl-3'>{format(item.modified, 'Do MMM YYYY') }</span></p>    
                </div>
                ))
        }   

        const stickerI = (vio,index) => {
            return <h5 key={`lk${index}`}>{vio.sticker ? `sticker ${index + 1}` : `no Sticker`}</h5>
        }
        



        // const list  = violations_list.map((item,index) => (<p key={index}>{item.violation}<span className='pl-3'>{format(item.modified, 'Do MMM YYYY') }</span></p>))
        const list  = violations_list.map((vio,index) => {return [stickerI(vio,index), input(vio)]} )

       return list
    }

    return (
        <div>
            violation count
           <h2 className={newNum >= 3 ? 'violation-status-error' : null}>{newNum}</h2>
           {showViolations()} 
           <button className='btn btn-primary' onClick={()=> setOpenSelect(!openSelect)}>Select Violation</button>
           {
            openSelect ?
                <div className="container">
                    <div className="position-relative">
                {violationArr.map((item,index) =>(
                    <div  key={`33${index}`}>
                    <label>{item.violation_type}</label>
                    <input type="checkbox" id={item.val} value={item.val} onChange={handleCheckboxChange}/>
                    </div>
                ))}
               
                <button className='btn btn-primary' onClick={()=>{return dispatch(violationList(lic,violationType2))}}>Add Violations</button>
            </div>
                </div>
            :
                null
           }
        </div>
    );
}

export default ViolationCount;
