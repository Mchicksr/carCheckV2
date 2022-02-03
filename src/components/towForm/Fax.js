import React,{useState} from 'react';
import axios from 'axios'
import { TextField, Button,Paper } from '@material-ui/core';

function Fax({manager,creator,towManager}) {
    const [img, setImg] = useState({})
    const [faxNum,setFaxNum]= useState('5618327178')
    const API_KEY = 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmYTJmZjQzMy1jYTE1LTQ3NTQtYWMyZC1hNTVhMDVjOTA4ZDMiLCJhY2NvdW50SWQiOiIxNTZiNjliNi0zZTEyLTQzMzktYTBiMy05MDU4ZmIzMjE4NWUiLCJpYXQiOjE2MzkxNTM1NDh9.in6OnMdkRw-k6CQHjOoqfQDacObO_yeb-kJYX54_rbw'
    const API = 'https://api.documo.com/v1/faxes'
    const handleChange = (e) => {
        if (e.target.files){
             setImg(e.target.files)
        }
    }

    const clear = () => {
        setFaxNum("")
     }
    
    const uploadFiles = (index) => {
        
        let more = {
            // 'faxNumber':'+18558093317',
            'faxNumber':`+1${faxNum}`,
            }
        let attachments = new FormData();
        attachments.append('faxNumber',JSON.stringify(more));
        attachments.append('attachments',img)

        for (let i = 0; i < img.length; i++){
            // console.log('yo',img[i])
            attachments.append(`file${index}`,img[i])
           
        }
      
        let headers = {
            // 'Authorization': config.API_KEY,
            'Authorization': API_KEY,
            'Content-Type':'multipart/form-data',
        }
       
        axios.post(API,attachments,{'headers':headers}).then(res=> {     
           console.log(res)
           alert('Fax sent')
           clear()
        })
    }
     console.log('towManager',towManager)
   

    return (
        <>
        {creator || towManager?<>
            <Paper>
                <h1 className="FormLabel">Tow Car</h1>
                <h2>Tow company Number</h2>
            {creator?
                <TextField name="faxNum" label="Type Number here" variant="standard" type="text" value={faxNum} onChange={(e)=>setFaxNum(e.target.value)}/>
            : null
            }  
                <p className="pFax">Upload both pdf and image of car</p>
                <label htmlFor="" className="FormLabel">PDF and Photo</label> <br />
                <input type="file" name="pdf" className="FormLabel" onChange={handleChange} multiple/> <br />
               
    
                <Button type="submit" variant="contained" color="primary" onClick={uploadFiles}>Send</Button>
            </Paper>
            
            </>: <h1>Authorized personal only.</h1>}
            
         </>
    );
}


export default Fax;