import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Paper } from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import axios from 'axios'
import {saveAs} from 'file-saver'
import formData from 'form-data'
import useStyles from './styles'
import config from '../../config'
// import {createImage,getImage} from '../../actions/Image'
// import {useDispatch,useSelector} from 'react-redux'
// import FileBase from 'react-file-base64'



function TowForm({Lic, Cm, Cmo, id, violations_list}) {
    const ndate = new Date()
    const dayz= `${ndate.getMonth()+ 1}/${ndate.getDate()}/${ndate.getFullYear()}`
    const timez= `${ndate.getHours()}:${ndate.getMinutes()}`
    const communities = useSelector(state => state.communities)
    const cars = useSelector(state => state.cars)
    const vioList = cars[0]?.violations_list
    console.log('vioList',vioList)
    console.log('cars',cars)

    

    const classes = useStyles()
    
    const theLocation = useLocation()
    const ComId = theLocation.state.ComId
    
    const [to,setTo]= useState("")
    const [faxNum,setFaxNum]= useState("5618327178")
    const [date,setDate]= useState(dayz)
    const [time,setTime]= useState(timez)
    const [from,setFrom]= useState("Pat Mo")
    const [owner,setOwner]= useState("Park Smart")
    const [callback,setCallback]= useState("7866272664")
    const [sa,setSa]= useState("")
    const [city,setCity]= useState("")
    const [zip,setZip]= useState("")
    const [location,setLocation]= useState("")
    const [,setMake]= useState("")
    const [,setModel]= useState("")
    const [year,setYear]= useState("")
    const [,setTag]= useState("")
    const [sta,setSta]= useState("")
    const [color,setColor]= useState("")
    const [vid,setVid]= useState("")
    const [details,setDetails]= useState("")
    const [vinfo,setVinfo]= useState("")
    const [reason,setReason]= useState(violations_list)
    const [img] = useState(null)
    const [photo,setPhoto] = useState([])
    const [photo1,setPhoto1] = useState("")
    const [photo2,setPhoto2] = useState("")
    const [chosenComID, setChosenComID] = useState("")
    const [reasonList, setReasonList] = useState([])
    // console.log('test1',photo)
    let comsIDS;
    // useEffect(() => {
    //     const populateViolations = () => {
    //         const vioArr = []
    //         vioList?.map(item => {
    //             item.reason.forEach(i => {
    //                 console.log('i',i.violation)
    //                 vioArr.push(i.violation)
    //             })
    //         })
    //         // setReasonList(vioArr)
    //         const vioStr = vioArr.join(" ")
    //         setReason(vioStr)
    //     }
    //     populateViolations()
    // },[])
    
    useEffect(() => {
   
        const ViolationsList = () => {
    
            const newArr = []
            const vio = violations_list.violations_list.forEach(violation => {
                  violation.reason.map(item => newArr.push(item.violation))
                  
                })
                const vioStr = newArr.join(", " )
                        setReason(vioStr)
              };
         
              ViolationsList()
    },[])

    useEffect(()=>{
        const findCommunity = () => {
            const theID = communities.filter(com => {
                if(com._id === ComId){
                    // setChosenComID(com.tow_company)
                    return com
                }
            }).map((com) => {
                comsIDS = com.tow_company
            })
            return theID;
        }
        findCommunity()
        // console.log('fd',comsIDS)
        // console.log('ch',chosenComID)
        switch (comsIDS) {
            case 'Kelle towing':
                setTo("Kelle Towing")
                // setSa("2635 electronic way")
                // setCity("Wpb")
                // setZip("33407")
                setFaxNum("561.832.7178")

                break;
            case 'Priority towing':
                setTo("Priority towing")
                // setSa("740 Barnett drive")
                // setCity("Lake Worth")
                // setZip("33461")
                setFaxNum("561.533.5573")
                break;
            case "Zuccalas":
                setTo("Zuccala\\'s wrecker service")
                // setSa("905 N. Railroad Ave.")
                // setCity("Boynton Bch.")
                // setZip("33435")
                setFaxNum("(561) 737-6379")
                break;
        
            default:
                // console.log('nothing')
                break;
        }
    },[])

    const chooseImage = () =>{
       setPhoto1(photo[0].selectedFile)
       setPhoto2(photo[1].selectedFile)
        
    }
   useEffect(() => {
    // axios.get('http://localhost:8000/image')
    axios.get(`${config.API_ENDPOINT}image`)
    .then(res => setPhoto(res.data))

   },[])


    const createAndDownloadPdf = (e) => {
        chooseImage()
     let formdata = new formData()
    let file = img
    formdata.append('image',file)
        e.preventDefault();
        axios.post(`${config.API_ENDPOINT}create-pdf`,{
            to,
            faxNum,
            date,
            time,
            from,
            owner,
            callback,
            sa,
            city,
            zip,
            location,
            make:Cm,
            model:Cmo,
            year,
            tag:Lic,
            sta,
            color,
            vid,
            details,
            vinfo,
            reason,
            formdata,
            photo1,
            photo2
            
        })
        // .then(()=>{console.log(formdata)})
    .then(() => {
        setTo('')
        setFaxNum('')
        setDate('')
        setTime('')
        setFrom('')
        setOwner('')
        setCallback('')
        setSa('')
        setCity('')
        setZip('')
        setLocation('')
        setMake('')
        setModel('')
        setYear('')
        setTag('')
        setSta('')
        setColor('')
        setVid('')
        setDetails('')
        setVinfo('')
        setReason('')
        // setImg(null)
    })
  .then(()=>axios.get(`${config.API_ENDPOINT}fetch-pdf`,{ responseType:'blob' }))
  .then((res)=>{
    const pdfBlob= new Blob([res.data], { type:'application/pdf' })

    saveAs(pdfBlob, 'newPdf.pdf');
  })
    }

  
   

    return (
        <Paper className={classes.paper}>
            {/* <div><FileBase type="file" multiple={false} onDone={({base64}) => setPic(base64)}></FileBase></div>
            <button onClick={()=>dispatch(createImage({selectedFile:pic}))}>Create Image</button> */}
            {/* <button onClick={chooseImage}>click</button> */}
                <h1 className="h1Form">Please Print</h1>
                <form autoComplete="off"  className="tow-form" onSubmit={createAndDownloadPdf}>
                   
                    <TextField name="to" variant="outlined" label="(Name of towing company)" fullWidth value={to}  required onChange={e => setTo(e.currentTarget.value)}/> <br/>
                    <TextField name="faxNum" variant="outlined" label="Fax number for towing company:" placeholder="xxx-xxx-xxxx" fullWidth value={faxNum}  required onChange={e => setFaxNum(e.currentTarget.value)}/> <br/>
                    <TextField name="date" variant="outlined" label="Today's Date" fullWidth value={date} placeholder="xx/xx/xxxx" required onChange={e => setDate(e.currentTarget.value)}/> <br/>
                    <TextField name="time" variant="outlined" label="Time" fullWidth value={time}  required onChange={e => setTime(e.currentTarget.value)}/> <br/>
                    <TextField name="from" variant="outlined" label="From(Your Name)" fullWidth value={from}  required onChange={e => setFrom(e.currentTarget.value)}/> <br/>
                    <TextField name="owner" variant="outlined" label="Owner/Agent for (Name of buisiness/Facility)" fullWidth value={owner}  required onChange={e => setOwner(e.currentTarget.value)}/> <br/>
                    <TextField name="callback" variant="outlined" label="Your call back phone number" fullWidth value={callback}  required onChange={e => setCallback(e.currentTarget.value)}/> <br/>
                    <TextField name="sa" variant="outlined" label="Located at Street Adress" fullWidth value={sa}  required onChange={e => setSa(e.currentTarget.value)}/> <br/>
                    <TextField name="city" variant="outlined" label="City" fullWidth value={city}  required onChange={e => setCity(e.currentTarget.value)}/> <br/>
                    <TextField name="zip" variant="outlined" label="Zip" fullWidth value={zip}  required onChange={e => setZip(e.currentTarget.value)}/> <br/>
                    <TextField name="location" variant="outlined" label="specific location of vehicle/vessel on property" fullWidth value={location}  onChange={e => setLocation(e.currentTarget.value)}/> <br/>           
                    <TextField name="year" variant="outlined" label="Year" fullWidth value={year}   onChange={e => setYear(e.currentTarget.value)}/> <br/>         
                    <TextField name="sta" variant="outlined" label="State" fullWidth value={sta}  required onChange={e => setSta(e.currentTarget.value)}/> <br/>
                    <TextField name="color" variant="outlined" label="Colors(s)" fullWidth value={color}  required onChange={e => setColor(e.currentTarget.value)}/> <br/>            
                    <TextField name="details" variant="outlined" label="Other details/description" fullWidth value={details}   onChange={e => setDetails(e.currentTarget.value)}/> <br/>                
                    <TextField name="vinfo" variant="outlined" label="Vehicle owner information (if known)" fullWidth value={vinfo}   onChange={e => setVinfo(e.currentTarget.value)}/> <br/>
                    <TextField name="reason" variant="outlined" label="Reason for Removal" fullWidth value={reason}   onChange={e => setReason(e.currentTarget.value)}/> <br/>             
                    { img && <img src={URL.createObjectURL(img)} alt="img" height="100px"></img>}
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth >Create PDF</Button>

                </form>
               
               
                </Paper>
    );
}

export default TowForm;



