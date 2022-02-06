import React, { useRef } from 'react';

import axios from 'axios'
import {saveAs} from 'file-saver'
import formData from 'form-data'

import CarCard from '../../components/carlog/CarCard';
import Log from '../../components/carlog/Log';
import dayjs from "dayjs";
import { useState,useEffect } from 'react';
import CommunityNav from '../../components/tagPage/community/CommunityNav';
import { TextField, Button, Paper } from '@material-ui/core';

import { useReactToPrint } from "react-to-print";
import {CSVLink} from "react-csv"




function CarLog({cars,communities}) {
    // console.log('this',cars)
    const [allCars, setCars] = useState(cars)
    const [commute,setCommute] = useState('')
   
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

   

      const handleFilterDate = (date,field) => {
        const filteredData = cars.filter(item => {
          if(field == 'from' && dayjs(item.modified).isSameOrAfter(date)){
            console.log('Copy',dayjs(item.modified).isSameOrAfter(date))
            return item
          } 
        })
        setCars(filteredData)
      }
     
      const renderList = () => {
          const list = allCars.filter((car)=>{
                if(!commute){
                    return <h1>Choose Community</h1>
                } else if(car.community_id === commute){

                    return car
                } else {
                }
            }).map( item => <CarCard 
            key={item.id} 
            cars={item}
            carMake={item.car_make}
            carModel={item.car_model}
            modified={item.modified}
            
            />)
            return list
        }

        const createAndDownloadPdf = (e) => {
            // chooseImage()
         let formdata = new formData()
        // let file = img
        // formdata.append('image',file)
            e.preventDefault();
            axios.post(`http://localhost:8000/create-log`,{
               Lic:cars.license_plate,
               Car: cars.cars,
               Mdate: cars.modified,
                
            })
            // .then(()=>{console.log(formdata)})
        .then(() => {
           
        })
        .then(()=>axios.get(`http://localhost:8000/fetch-log`,{ responseType:'blob' }))
          .then((res)=>{
          const pdfBlob= new Blob([res.data], { type:'application/pdf' })
          saveAs(pdfBlob, 'newPdf.pdf');
        })
        }

        const headers =[
            {label:'License Plate',key:'license_plate'},
            {label:'Car Make',key:'car_make'},
            {label:'Car Model',key:'car_model'},
            {label:'Date Submited',key:'modified'}
          ]
          
          const csvReport = {
            filename:'report.csv',
            headers:headers,
            data: allCars
          }

          console.log('cehk',allCars)
    return (
        <div>
            <h1>Car Log</h1> <br></br>
            <div className="fileContainer">
                <button onClick={handlePrint} className="print__button"> Create PDF </button> 
                <CSVLink className='print__button' {...csvReport}>Create CSV</CSVLink> <br />
            </div>


            <select name="community_id" id="community_id" value={commute} onChange={(e) => setCommute(e.target.value)}>
                    <option>---select community</option>
                    {communities.map(value => {
                        return <option key={value._id} value={value._id}>{value.community}</option>
                    })}
                </select>
            <Log    
                onDateFilter={handleFilterDate}
                setData={setCars}
            />
            <div ref={componentRef} className="ClContainer">
                {renderList()}

            </div>
                <Button variant="contained" color="secondary" size="large" onClick={()=> setCars(cars)}>Reset</Button>
                {/* <Button variant="contained" color="primary" size="large" onClick={createAndDownloadPdf}>Create Log</Button> */}

        </div>
    );
}

export default CarLog;