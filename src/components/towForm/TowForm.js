import React, { useState } from 'react';
import axios from 'axios'
import {saveAs} from 'file-saver'
import formData from 'form-data'
import './TowForm.css'
// import '../Routes/TowForm/TowForm.css'
// import Fax from './fax';
// import './Form'
// import config from '../config';



function TowForm({Lic, Cm, Cmo}) {

    const [to,setTo]= useState("")
    const [faxNum,setFaxNum]= useState("")
    const [date,setDate]= useState("")
    const [time,setTime]= useState("")
    const [from,setFrom]= useState("")
    const [owner,setOwner]= useState("")
    const [callback,setCallback]= useState("")
    const [sa,setSa]= useState("")
    const [city,setCity]= useState("")
    const [zip,setZip]= useState("")
    const [location,setLocation]= useState("")
    const [make,setMake]= useState("")
    const [model,setModel]= useState("")
    const [year,setYear]= useState("")
    const [tag,setTag]= useState("")
    const [sta,setSta]= useState("")
    const [color,setColor]= useState("")
    const [vid,setVid]= useState("")
    const [details,setDetails]= useState("")
    const [vinfo,setVinfo]= useState("")
    const [reason,setReason]= useState("")
    const [img] = useState(null)

    
    // console.log('form',file)

   
    
    const createAndDownloadPdf = (e) => {
     let formdata = new formData()
    let file = img
    formdata.append('image',file)
        e.preventDefault();
        console.log('click')
        axios.post('https://api.documo.com/v1/faxes',{
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
            make,
            model,
            year,
            tag,
            sta,
            color,
            vid,
            details,
            vinfo,
            reason,
            formdata
            
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
  .then(()=>axios.get('http://localhost:8000/fetch-pdf',{ responseType:'blob' }))
  .then((res)=>{
    const pdfBlob= new Blob([res.data], { type:'application/pdf' })

    saveAs(pdfBlob, 'newPdf.pdf');
  })
    }

  
   

    return (
        <div>
                <h1 className="h1Form">Please Print</h1>
                <form className="tow-form">
                    <label htmlFor="company" className="FormLabel">To (Name of towing company)</label>
                    <input type="text" className="FormInput"value={to} onChange={e => setTo(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="faxNumber" className="FormLabel">Fax number for towing company:</label>
                    <input type="text" className="FormInput"value={faxNum} onChange={e => setFaxNum(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Today's Date</label>
                    <input type="text" className="FormInput"value={date} onChange={e => setDate(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Time</label>
                    <input type="text" className="FormInput"value={time} onChange={e => setTime(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">From(Your Name)</label>
                    <input type="text" className="FormInput"value={from} onChange={e => setFrom(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Owner/Agent for (Name of buisiness/Facility):</label>
                    <input type="text" className="FormInput"value={owner} onChange={e => setOwner(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Your call back phone number:</label>
                    <input type="text" className="FormInput"value={callback} onChange={e => setCallback(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Located at Street Adress:</label>
                    <input type="text" className="FormInput"value={sa} onChange={e => setSa(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">city:</label>
                    <input type="text" className="FormInput"value={city} onChange={e => setCity(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Zip:</label>
                    <input type="text" className="FormInput"value={zip} onChange={e => setZip(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">specific location of vehicle/vessel on property:</label>
                    <input type="text" className="FormInput"value={location} onChange={e => setLocation(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Make:</label>
                    <h3 className="FormLabel">{Cm} {<br></br>} (copy and paste)</h3>
                    <input type="text" placeholder={Cm} className="FormInput"value={make} onChange={e => setMake(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Model:</label>
                    <h3 className="FormLabel">{Cmo} {<br></br>} (copy and paste)</h3>
                    <input type="text" placeholder={Cmo} className="FormInput"value={model} onChange={e => setModel(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Year:</label>
                    <input type="text" className="FormInput"value={year} onChange={e => setYear(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Tag No.:</label>
                    <h3 className="FormLabel">{Lic}{<br></br>} (copy and paste)</h3>
                    <input type="text" placeholder={Lic} className="FormInput"value={tag} onChange={e => setTag(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">State:</label>
                    <input type="text" className="FormInput"value={sta} onChange={e => setSta(e.currentTarget.value)}></input><br></br>
                    <label htmlFor="" className="FormLabel">Colors(s):</label>
                    <input type="text" className="FormInput"value={color} onChange={e => setColor(e.currentTarget.value)}></input><br></br>
                    {/* <label htmlFor="" className="FormLabel">Vehicle Identification No.:</label> */}
                    {/* <input type="text" className="FormInput"value={vid} onChange={e => setVid(e.currentTarget.value)}></input><br></br> */}
                    <label htmlFor="" className="FormLabel">Other details/description:</label>
                    <input type="text" className="FormInput"value={details} onChange={e => setDetails(e.currentTarget.value)}></input><br></br>
                    {/* <label htmlFor="" className="FormLabel">Vehicle owner information (if known): */}
                    {/* </label>/ */}
                    {/* <input type="text" className="FormInput"value={vinfo} onChange={e => setVinfo(e.currentTarget.value)}></input><br></br> */}
                    <label htmlFor="" className="FormLabel">Reason for Removal</label>
                    <input type="text" className="FormInput"value={reason} onChange={e => setReason(e.currentTarget.value)}></input><br></br>
                    {/* <input type="file" onChange={handleChange} id="avatar" name="avatar" accept="image/png, image/jpeg, accepts" multiple="multiple"/><br/> */}
                    {/* {console.log('img',formdata)} */}
                    { img && <img src={URL.createObjectURL(img)} alt="img" height="100px"></img>}
                    <button onClick={createAndDownloadPdf}>Create PDF</button>

                </form>
                {/* <Fax 
                    faxNum={faxNum}
                /> */}
               
            </div>
    );
}

export default TowForm;



