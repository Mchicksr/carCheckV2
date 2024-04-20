import React from 'react';
import { format } from 'date-fns';
import './carLog.css'
export const PrintLog = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} >
        <div className="px-6 ">
            {/* <h1 className='text-dark mt-4'>Security Report: 08/25/2023 - 08/31/2023</h1> */}
            <h1 className='text-dark mt-4'>Security Report: {format(props.dateParams.date1, 'M/DD/YYYY')} - {format(props.dateParams.date2, 'M/DD/YYYY')}</h1>
            <div className="center-content col-12 ">
                <div className="container text-dark">
                    <h2 className='text-center py-4'>Vioaltions Issued</h2>
                    <ol className='text-left'>
                        {/* <li className='text-left'>Color CarMake CarModel Date Violation1/violation2</li> */}
                        <table className="table table-striped">
                        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">license Plate</th>
            <th scope="col">Color</th>
            <th scope="col">Car Make</th>
            <th scope="col">Car Model</th>
            <th scope="col">Date Added</th>
            <th scope="col">Violations</th>
        </tr>
        </thead>
                        {props.carInfo()}
                        </table>
                    </ol>
                </div>
            </div>
            <div className="center-content col-12">
            <div className="container text-dark">
                <h2 className='text-center py-4'>Vehicles Towed</h2>
                <ul>
                    {/* <li className='text-left'>none</li> */}
                    <table className="table table-striped">
                    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">license Plate</th>
            <th scope="col">Color</th>
            <th scope="col">Car Make</th>
            <th scope="col">Car Model</th>
            <th scope="col">Date Added</th>
            <th scope="col">Violations</th>
        </tr>
        </thead>
                    {props.towInfo()}
                    </table>
                </ul>
            </div>
        </div>
        <div className="center-content col-12">
            <div className="container text-dark">
                <h3 className='text-center py-4'>Notes</h3>
                <ul>
                    {/* <li className='text-left'>none</li> */}
                    {props.noteList()}
                </ul>
            </div>
        </div>
          
        <div className="center-content">
            <div className="container text-dark">
                <h3 className='text-center'>Summary</h3>
                <div class="row justify-content-center py-4">
                    <div className="col-12 col-md-4"><h4 className='text-center'>Amount of cars: {props.summary.car_amount}</h4></div>
                    <div className="col-12 col-md-4"><h4 className='text-center'>Total Cars Towed: {props.summary.tows_total}</h4></div>
                    <div className="col-12 col-md-4"><h4 className='text-center'>Total Violations: {props.summary.violation_totals}</h4></div>
                    
                    
                    
                </div>
                    
            </div>
        </div>
        </div>
      </div>
    );
  });