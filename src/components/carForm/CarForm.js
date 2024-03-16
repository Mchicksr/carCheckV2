import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';
import {createCar, reFetchCarImage} from '../../actions/cars'
import { createViolation } from '../../actions/violation';
// import { violationList } from '../../actions/cars';
// import { violationArr } from '../violations/violationList';
import SaveImage from '../saveImage/SaveImage';
import SaveImage2 from '../saveImage/SaveImage2';
import { storage } from '../../firebase/fbConfig';
import { getDownloadURL,ref, uploadBytes } from 'firebase/storage';
import { createCarImage } from '../../actions/vProfileAct';
import { getFirestore, collection } from 'firebase/firestore';
import useStyles from './styles'
import './CarForm.css'

function CarForm({communities}) {
    const cars = useSelector((state) => state.cars)
    const violationArr = useSelector((state) => state.violationList)
    // const violation = 'violation'
    const [imageUpload, setImageUpload] = useState(null)
    const [imageSelected, setImageSelected] = useState([])
    const [shouldRunUploadImage, setShouldRunUploadImage] = useState(false)

    const [violationType2,setViolationType2] = useState([])
    const [carData,setCarData] = useState({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:"",violations_list:{}})
    // const [violationType,setViolationType] = useState("")
    const [violationType] = useState("")
    const [activateBtn, setActivateBtn] = useState(false)
    const [carFormMode, setCarFormMode] = useState(false)
    // const violation_types = useSelector((state) => state.violations)   
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
   

    const violationData = {violation_type: violationType,carLic: carData.license_plate, violations_list:{"violation":violationType2}}
     const collectImages = (e) =>{
        const files  = Array.from(e.target.files)
        setImageSelected(files)
     }
    useEffect(() => {
        const uploadImage = (e) => {
       
            // e.preventDefault()
            
       
        imageSelected.forEach((imageUpload)=>{

            if (imageUpload == null) return;
    
            const imageRef = ref(storage, `images/${imageUpload.name}`)
    
            uploadBytes(imageRef, imageUpload)
                .then(() => {
                    alert("Image Upload")
    
                    getDownloadURL(imageRef)
                        .then((downloadURL) => {
                            setShouldRunUploadImage(true)
    
                            console.log('dUrl', downloadURL);
                            const correctCar = cars.find(car => car.license_plate === carData.license_plate)
                            console.log('correctCar',correctCar.license_plate)
                                dispatch(createCarImage(correctCar.license_plate, {car_image:downloadURL}))
                                dispatch(reFetchCarImage(correctCar.license_plate))
    
                            // dispatch(showImage({car_image:downloadURL}))
    
    
                        })
                        .catch((error) => {
                            console.log("Error getting download URL:", error);
                        })
    
                })
                .catch((error) => {
                    console.log("Error uploading image:", error);
                })
        })
        }
        console.log('activebtn',activateBtn)
    if(activateBtn &&  cars.length > 0){
        console.log('inside',carData.license_plate)
        
        uploadImage()
        setActivateBtn(false)
        return[  
            history.push('/Tags')
        ]
    }

    },[ carData.license_plate,shouldRunUploadImage,activateBtn,cars])

    const clear = () => {
       setCarData({license_plate:"",car_make:"",car_model:"",color:"",car_address:"",violations:0,community_id:""})
    }

   
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('carData',carData)
        dispatch(createCar({...carData,violations_list:violationType2 }))
        dispatch(createViolation({...violationData}))
        
        setActivateBtn(true)
        clear()
        // return[
           
        //     history.push('/Tags')
        // ]
    }
    
   
    // const handleCheckboxChange = (e) =>{
       
    //     let newArr = [...violationType2, e.target.id]
    //     if(violationType2.includes(e.target.id)){
    //         newArr = newArr.filter(vio => vio !==  e.target.id)
    //     }
    //         console.log('narr',newArr)
      
    //     setViolationType2(newArr)
       
    // }
    const handleCheckboxChange = (e) =>{
       let transorm = {"violation": e.target.id}
       let jsonViolation = JSON.stringify(transorm);
        // let newArr = [...violationType2, e.target.id]
        let newArr = [...violationType2, jsonViolation]
        if(violationType2.includes(e.target.id)){
            newArr = newArr.filter(vio => vio !==  e.target.id)
        }
            console.log('narr',newArr)
      
        setViolationType2(newArr)
       
    }

    return (
        <Paper className={classes.paper}>
            <p>Add Image of the Car</p>
            <form autoComplete="off"  className={`${classes.root} ${classes.form} mt-4`} onSubmit={handleSubmit}>
            {/* <SaveImage2 activateBtn={activateBtn} lp={carData.license_plate} hideView={carFormMode}/> */}
            {/* <input type="file" name="" id="" onChange={(e) => { setImageUpload(e.target.files[0]) }} /> <br /> */}
            <input type="file" name="" id="" onChange={collectImages} multiple/> <br />
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
            
                {violationArr.map((item,index) =>(
                    <div  key={`33${index}`}>
                    <label>{item.violation_type}</label>
                     <input type="checkbox" id={item.val.violation} value={item.val.violation} onChange={handleCheckboxChange}/>
                    {/* <input type="checkbox" id={item.val} value={item.val} onChange={handleCheckboxChange}/> */}
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