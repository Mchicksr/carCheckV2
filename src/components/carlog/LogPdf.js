import React,{useState} from 'react';
import {saveAs} from 'file-saver'
import formData from 'form-data'
import axios from 'axios'
import { TextField, Button, Paper } from '@material-ui/core';


function LogPdf(props) {
    const [img] = useState(null)
    const [photo,setPhoto] = useState([])
    const [photo1,setPhoto1] = useState("")
    const [photo2,setPhoto2] = useState("")
    // const classes = useStyles()

    const chooseImage = () =>{
        setPhoto1(photo[0].selectedFile)
        setPhoto2(photo[1].selectedFile)
         
     }
    const createAndDownloadPdf = (e) => {
    //     chooseImage()
    //  let formdata = new formData()
    // let file = img
    // formdata.append('image',file)
        e.preventDefault();
        axios.post(`http://localhost:8000/create-car-log-pdf`,{
         
            
        })
        // .then(()=>{console.log(formdata)})
    .then(() => {
      
    })
  .then(()=>axios.get(`http://localhost:8000/fetch-log-pdf`,{ responseType:'blob' }))
  .then((res)=>{
    const pdfBlob= new Blob([res.data], { type:'application/pdf' })

    saveAs(pdfBlob, 'newPdf.pdf');
  })
    }
    return (
        <div>
             <form autoComplete="off"  className="tow-form" onSubmit={createAndDownloadPdf}>
                      
                    {/* { img && <img src={URL.createObjectURL(img)} alt="img" height="100px"></img>} */}
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth >Create PDF</Button>

                </form>
        </div>
    );
}

export default LogPdf;