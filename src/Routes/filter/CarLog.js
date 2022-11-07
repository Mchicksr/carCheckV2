import React, { useRef } from 'react';

// import axios from 'axios'
// import {saveAs} from 'file-saver'
// import formData from 'form-data'

import CarCard from '../../components/carlog/CarCard';
// import CarCardCsv from'../../components/carlog/CarCardCsv';
import Log from '../../components/carlog/Log';
import dayjs from "dayjs";
import { useState } from 'react';
import { Button } from '@material-ui/core';

// import { useReactToPrint } from "react-to-print";
import {CSVLink} from "react-csv"




function CarLog({cars,communities,violations}) {
    // console.log('this',cars)
    const [allCars, setCars] = useState(cars)
    const [commute,setCommute] = useState('')
    const [carStatus, setCarStatus] = useState([]) 
   console.log('carsS',carStatus)
    const componentRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

   

      const handleFilterDate = (date,field) => {
        const filteredData = cars.filter(item => {
        //   if(field == 'from' && dayjs(item.modified).isSameOrAfter(date)){
          if(field === 'from' && dayjs(item.modified).isSameOrAfter(date)){
            // console.log('Copy',dayjs(item.modified).isSameOrAfter(date))
            return item
          } 
        })
        setCars(filteredData)
      }
    //  console.log(violations,'checks')
      const renderList = () => {
          const list = allCars.filter((car)=>{
                if(!commute){
                    return <h1>Choose Community</h1>
                } else if(car.community_id === commute){
                // } else if(car.community_id === commute){

                    return car
                } else {
                }
            }).map( item => <CarCard 
            key={item._id} 
            cars={item}
            carMake={item.car_make}
            carModel={item.car_model}
            modified={item.modified}
            vType={violations}
            setCarStatus={setCarStatus}
            
            />)
            return list
        }
    //   const renderCsv = () => {
    //       const list = allCars.filter((car)=>{
    //             if(!commute){
    //                 return <h1>Choose Community</h1>
    //             } else if(car.community_id === commute){

    //                 return car
    //             } else {
    //             }
    //         }).map( item => <CarCardCsv 
    //         key={item._id} 
    //         cars={item}
    //         carMake={item.car_make}
    //         carModel={item.car_model}
    //         modified={item.modified}
    //         vType={violations}
    //         setCarStatus={setCarStatus}
            
    //         />)
    //         return list
    //     }

        const arr2 = [
            {id:1,letter:'a'},
            {id:2,letter:'b'},
            {id:3,letter:'c'}
    ]
    const both = [...allCars, ...arr2]
    // console.log('both',both)
        const headers =[
            {label:'License Plate',key:'license_plate'},
            {label:'Car Make',key:'car_make'},
            {label:'Car Model',key:'car_model'},
            {label:'Date Submited',key:'modified'},
            {label:'Violation',key:'violation'},
           

            // {label:'Violations',key:'violaitons'}
          ]
          
          const csvReport = {
            filename:'report.csv',
            headers:headers,
            data: allCars
          }

    return (
        <div>
            <h1>Car Log</h1> <br></br>
            <div className="fileContainer">
                {/* <button onClick={handlePrint} className="print__button"> Create PDF </button>  */}
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
            <div className="pretti">
            <div ref={componentRef} className="ClContainer">
                {renderList()}
            </div>
                <Button variant="contained" color="secondary" size="large" onClick={()=> setCars(cars)}>Reset</Button>
                {/* <Button variant="contained" color="primary" size="large" onClick={createAndDownloadPdf}>Create Log</Button> */}
                </div>
                {/* <div className="pdf">
                <div ref={componentRef} className="">
                {renderCsv()}
            </div>
                </div> */}
                {/* <Button variant="contained" color="secondary" size="large" onClick={()=> setCars(cars)}>Reset</Button> */}
        </div>
    );
}

export default CarLog;