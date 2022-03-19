// import axios from 'axios'
import React from 'react';
import dayjs from "dayjs";
// import {saveAs} from 'file-saver'
// import formData from 'form-data'

// import './CarCard.css'
import violations from '../../reducers/violation';

function CarCard({cars,vType,setCarStatus}) {

const works = [...vType].filter(item => {
  if(item.carLic === cars.license_plate){
    return item
  } else {
    return null
  }
 
}).map(item =>{ return[
                  setCarStatus(item.violation_type),
                  <li key={item._id}>{item.violation_type}</li>]})
    return (
        
        <div className="">
          <div className="">
            {/* <img src={cars?.image} className="card-img-top" alt="" /> */}
            <div className="">
                <h3 className="FcHeader"> Plate</h3>
              <p className="card-text">{cars?.license_plate}</p>
              <h3 className="FcHeader">Car Type</h3>
              <h5 className="card-title">
                {cars?.car_make} {cars?.car_model}
              </h5>
              <h3 className="FcHeader">Date </h3>
              <p className="card-text">
                {dayjs(cars?.modified).format("DD MMMM YYYY")}
              </p>
              
              <h3 className="FcHeader">Color</h3>
                <p className="card-text">{cars?.color}</p>

                <h3 className="FcHeader">Violations</h3>
               <p className="card-text">{works}</p>

              
            </div>
          </div>
        </div>
      );
}

export default CarCard;