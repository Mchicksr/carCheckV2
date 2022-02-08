import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// import FileBase from 'react-file-base64';
import {createCar} from '../../actions/cars'
import { createViolation } from '../../actions/violation';
import useStyles from './styles'

function CarForm({communities}) {
    const [carData,setCarData] = useState({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:""})
    const [violationType,setViolationType] = useState("")
    // const violation_types = useSelector((state) => state.violations)    
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const violationArr = [
        {id:1,violation_type:'parking in grass'},
        {id:2,violation_type:'backing in'},
        {id:3,violation_type:'parking on street'}, 
        {id:4,violation_type:'unauthorized parking'},
        {id:5,violation_type:'no park zone'},
        {id:6,violation_type:'expired pass'},
        {id:7,violation_type:'other'}
    
    ]
    const violationData = {violation_type: violationType,carLic: carData.license_plate}
    const clear = () => {
       setCarData({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:""})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createCar({...carData}))
        dispatch(createViolation({...violationData}))
        clear()
        history.push('/Tags')
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off"  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="license_plate" variant="outlined" label="License Plate" fullWidth value={carData.license_plate}  required onChange={(e) => setCarData({...carData,license_plate: e.target.value})}/>
                <TextField name="car_make" variant="outlined" label="Car Make" fullWidth value={carData.car_make} required onChange={(e) => setCarData({...carData,car_make: e.target.value})}/>
                <TextField name="car_model" variant="outlined" label="Car Model" fullWidth value={carData.car_model} required onChange={(e) => setCarData({...carData,car_model:e.target.value})}/>
                <TextField name="color" variant="outlined" label="Color" fullWidth value={carData.color} required onChange={(e) => setCarData({...carData,color:e.target.value})}/>
                {/* <TextField name="car_address" variant="outlined" label="address" fullWidth value={carData.car_address} required onChange={(e) => setCarData({...carData,car_address:e.target.value})}/> */}
                <TextField name="car_address" variant="outlined" label="Comments" fullWidth value={carData.car_address} multiline onChange={(e) => setCarData({...carData,car_address:e.target.value})}/>
                <select name="community_id" id="community_id" value={carData.community_id} onChange={(e) => setCarData({...carData,community_id:e.target.value})}>
                    <option>---select community</option>
                    {communities.map((value,index) => {
                        return <option key={index} value={value._id}>{value.community}</option>
                    })}
                </select>

                <select name="violation_type" id="violation_type" value={violationType} onChange={(e) => setViolationType(e.target.value)}>
                    <option>---select violation</option>
                    {violationArr.map(value => {
                        return <option key={value._id} value={value.violation_type} >{value.violation_type}</option>
                    })}
                </select>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default CarForm;