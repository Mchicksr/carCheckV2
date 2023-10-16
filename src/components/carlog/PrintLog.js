import React from 'react';
import { format } from 'date-fns';
import './carLog.css'
export const PrintLog = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} >
        <div className="px-6">
            {/* <h1 className='text-dark mt-4'>Security Report: 08/25/2023 - 08/31/2023</h1> */}
            <h1 className='text-dark mt-4'>Security Report: {format(props.dateParams.date1, 'M/DD/YYYY')} - {format(props.dateParams.date2, 'M/DD/YYYY')}</h1>
            <div className="center-content">
                <div className="container text-dark">
                    <h2 className='text-left'>Vioaltions Issued</h2>
                    <ol className='text-left'>
                        {/* <li className='text-left'>Color CarMake CarModel Date Violation1/violation2</li> */}
                        {props.carInfo()}
                    </ol>
                </div>
            </div>
            <div className="center-content">
            <div className="container text-dark">
                <h2 className='text-left'>Vehicles Towed</h2>
                <ul>
                    {/* <li className='text-left'>none</li> */}
                    {props.towInfo()}
                </ul>
            </div>
        </div>
        <div className="center-content">
            <div className="container text-dark">
                <h3 className='text-left'>Notes</h3>
                <ul>
                    {/* <li className='text-left'>none</li> */}
                    {props.noteList()}
                </ul>
            </div>
        </div>
        <div className="center-content">
            <div className="container text-dark">
                <h3 className='text-left'>Summary</h3>
                <ul>
                    <p className='text-left'>Amount of cars: {props.summary.car_amount}</p>
                    <p className='text-left'>Total Cars Towed: {props.summary.tows_total}</p>
                    <p className='text-left'>Total Violations: {props.summary.violation_totals}</p>
                </ul>
                    
            </div>
        </div>
        </div>
      </div>
    );
  });