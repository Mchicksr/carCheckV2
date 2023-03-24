import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// import FileBase from 'react-file-base64';
import {createCar} from '../../actions/cars'
import { createViolation } from '../../actions/violation';
// import { violationList } from '../../actions/cars';
import useStyles from './styles'
import './CarForm.css'

function CarForm({communities}) {
    // const violation = 'violation'
    const [violationType2,setViolationType2] = useState([])
    const [carData,setCarData] = useState({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:"",violations_list:{}})
    // const [violationType,setViolationType] = useState("")
    const [violationType] = useState("")
    // const violation_types = useSelector((state) => state.violations)    
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    // const violationArr = [
    //     {id:1,violation_type:'parking in grass'},
    //     {id:2,violation_type:'backing in'},
    //     {id:3,violation_type:'parking on street'}, 
    //     {id:4,violation_type:'expired license plate'},
    //     {id:5,violation_type:'not registered'},
    //     {id:7,violation_type:'expired pass'},
    //     {id:8,violation_type:'commercial vehicle'},
    //     {id:9,violation_type:'other'}
    
    // ]

    const violationArr = [
        {id:1,violation_type:"parking in grass", val:`{"violation": "parking in grass"}`},
        {id:2,violation_type:"backing in",val:`{"violation": "backing in"}`},
        {id:3,violation_type:"parking on street",val:`{"violation": "parking on street"}`}, 
        {id:4,violation_type:"expired license plate",val:`{"violation": "expired license plate"}`},
        {id:5,violation_type:"not registered",val:`{"violation":"not registered" }`},
        {id:7,violation_type:"expired pass",val:`{"violation": "expired pass"}`},
        {id:8,violation_type:"commercial vehicle" ,val:`{"violation": "commercial vehicle"}`},
        {id:8,violation_type:"no decal or pass" ,val:`{"violation": "no decal or pass"}`},
        {id:8,violation_type:"invalid decal" ,val:`{"violation": "invalid decal"}`},
        {id:8,violation_type:"inop vehicle" ,val:`{"violation": "inop vehicle"}`},
        {id:8,violation_type:"improper parking" ,val:`{"violation": "improper parking"}`},
        {id:8,violation_type:"resident in" ,val:`{"violation": "resident in"}`}, 
        {id:9,violation_type:"other",val:`{"violation": "other"}`}
    
    ]

    const violationData = {violation_type: violationType,carLic: carData.license_plate, violations_list:{"violation":violationType2}}
    const clear = () => {
       setCarData({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:""})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createCar({...carData,violations_list:violationType2 }))
        dispatch(createViolation({...violationData}))
        return[
           
            history.push('/Tags')
        ]
    }

    // const handleCheckboxChange = (e) =>{
    //     let newArr = [...violationType2, {'violation': e.target.id}]
    //     if(violationType2.includes(e.target.id)){
    //         newArr = newArr.filter(vio => vio !== e.target.id)
    //     }
    //     console.log('newArr',newArr)
    //     setViolationType2(newArr) 
    // }
    const handleCheckboxChange = (e) =>{
       
        let newArr = [...violationType2, e.target.id]
        if(violationType2.includes(e.target.id)){
            newArr = newArr.filter(vio => vio !==  e.target.id)
        }
            // console.log('narr',newArr)
      
        setViolationType2(newArr)
       
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off"  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="license_plate" variant="outlined" label="License Plate" fullWidth value={carData.license_plate}  required onChange={(e) => setCarData({...carData,license_plate: e.target.value})}/>
                <TextField name="car_make" variant="outlined" label="Car Make" fullWidth value={carData.car_make} required onChange={(e) => setCarData({...carData,car_make: e.target.value})}/>
                <TextField name="car_model" variant="outlined" label="Car Model" fullWidth value={carData.car_model} required onChange={(e) => setCarData({...carData,car_model:e.target.value})}/>
                <TextField name="color" variant="outlined" label="Color" fullWidth value={carData.color} required onChange={(e) => setCarData({...carData,color:e.target.value})}/>

                <TextField name="car_address" variant="outlined" label="Comments" fullWidth value={carData.car_address} multiline onChange={(e) => setCarData({...carData,car_address:e.target.value})}/>
                <select name="community_id" id="community_id" value={carData.community_id} onChange={(e) => setCarData({...carData,community_id:e.target.value})}>
                    <option>---select community</option>
                    {communities.map((value,index) => {
                        return <option key={index} value={value._id}>{value.community}</option>
                    })}
                </select> 

             
            <div className="position-relative">
                {/* {violationArr.map((item,index) =>(
                    <div  key={`23${index}`}>
                    <label>{item.violation_type}</label>
                    <input type="checkbox" id={item.violation_type} value={item.violation_type} onChange={handleCheckboxChange}/>
                    </div>
                ))} */}
                {violationArr.map((item,index) =>(
                    <div  key={`33${index}`}>
                    <label>{item.violation_type}</label>
                    <input type="checkbox" id={item.val} value={item.val} onChange={handleCheckboxChange}/>
                    </div>
                ))}
            </div>
               
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default CarForm;