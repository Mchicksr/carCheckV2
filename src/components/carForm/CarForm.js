import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
// import FileBase from 'react-file-base64';
import {createCar} from '../../actions/cars'
import useStyles from './styles'

function CarForm({communities}) {
    const [carData,setCarData] = useState({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:""})
    // const [communityName, setCommunityName] = useState({})
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    // useEffect(()=>{
    //     if (carData) setCarData(carData)
    // },[carData])
    const clear = () => {
       setCarData({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:""})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createCar({...carData}))
        clear()
        history.push('/Tags')
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off"  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="license_plate" variant="outlined" label="license Plate" fullWidth value={carData.license_plate}  required onChange={(e) => setCarData({...carData,license_plate: e.target.value})}/>
                <TextField name="car_make" variant="outlined" label="car Make" fullWidth value={carData.car_make} required onChange={(e) => setCarData({...carData,car_make: e.target.value})}/>
                <TextField name="car_model" variant="outlined" label="car Model" fullWidth value={carData.car_model} required onChange={(e) => setCarData({...carData,car_model:e.target.value})}/>
                <TextField name="color" variant="outlined" label="Color" fullWidth value={carData.color} required onChange={(e) => setCarData({...carData,color:e.target.value})}/>
                <TextField name="car_address" variant="outlined" label="address" fullWidth value={carData.car_address} required onChange={(e) => setCarData({...carData,car_address:e.target.value})}/>
                <select name="community_id" id="community_id" value={carData.community_id} onChange={(e) => setCarData({...carData,community_id:e.target.value})}>
                    <option>---select community</option>
                    {communities.map(value => {
                        return <option key={value._id} value={value._id}>{value.community}</option>
                    })}
                </select>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default CarForm;