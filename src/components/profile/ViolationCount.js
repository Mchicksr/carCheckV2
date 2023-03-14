import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns'
import { violationList } from '../../actions/cars';


const ViolationCount = ({id,violations_list,lic,setViolationCount}) => {
    const [violationNum,  setViolationNum] = useState(0)
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
        const list  = violations_list.map((item,index) => (<p key={index}>{item.violation}<span className='pl-3'>{format(item.modified, 'Do MMM YYYY') }</span></p>))

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
