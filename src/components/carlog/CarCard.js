// import axios from 'axios'
import React from 'react';
import dayjs from "dayjs";
// import {saveAs} from 'file-saver'
// import formData from 'form-data'

import './CarCard.css'

function CarCard({cars}) {

//   const createAndDownloadPdf = (e) => {
//  let formdata = new formData()
//     e.preventDefault();
//     axios.post(`http://localhost:8000/create-log`,{
//        Lic:cars.license_plate,
//        Car: cars.cars,
//        Mdate: cars.modified,
        
//     })
// .then(() => {
   
// })
// .then(()=>axios.get(`http://localhost:8000/fetch-log`,{ responseType:'blob' }))
//   .then((res)=>{
//   const pdfBlob= new Blob([res.data], { type:'application/pdf' })
//   saveAs(pdfBlob, 'newPdf.pdf');
// })
// }

    return (
        
        <div className="tagCardFc">
          <div className="containerFc">
            {/* <img src={cars?.image} className="card-img-top" alt="" /> */}
            <div className="card-body">
                <h3 className="FcHeader">License Plate</h3>
              <p className="card-text">{cars?.license_plate}</p>
              <h3 className="FcHeader">Car Type</h3>
              <h5 className="card-title">
                {cars?.car_make} {cars?.car_model}
              </h5>
              <h3 className="FcHeader">Date Submited</h3>
              <p className="card-text">
                {dayjs(cars?.modified).format("DD MMMM YYYY")}
              </p>
              <h3 className="FcHeader">Violations</h3>
              <h5 className="card-title">
                {cars?.violations} 
              </h5>
            </div>
          </div>
        </div>
      );
}

export default CarCard;