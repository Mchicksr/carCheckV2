import React from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';

const LogCsv = () => {
    const logs = useSelector(state => state.cindex)
    const totals = useSelector(state => state.indexTotal )
    const community_name = totals.communityName
 const headers = [
     {label:`Community: ${community_name}`, key:"communityName"},
    {label:"Cars Total", key:"car_amount"},
    {label:"Tows Total", key:"tows_total"},
    {label:"Violations Total", key:"violation_totals"},
    {label: "License plate", key:"license_plate"},
    {label: "Car make", key:"car_make"},
    {label: "Car model", key:"car_model"},
    {label: "Car color", key:"color"},
    {label:"Sticker 1 info", key:""},
    {label:"violations1", key:"violations_list[0].reason[0].violation"},
    {label:"violation Date", key:"violations_list[0].reason[0].modified"},
    {label:"violations2", key:"violations_list[0].reason[1].violation"},
    {label:"violation Date", key:"violations_list[0].reason[1].modified"},
    {label:"violations3", key:"violations_list[0].reason[2].violation"},
    {label:"violation Date", key:"violations_list[0].reason[2].modified"},
    {label:"Sticker 2 info", key:""},
    {label:"violations1", key:"violations_list[1].reason[0].violation"},
    {label:"violation Date", key:"violations_list[1].reason[0].modified"},
    {label:"violations2", key:"violations_list[1].reason[1].violation"},
    {label:"violation Date", key:"violations_list[1].reason[1].modified"},
    {label:"violations3", key:"violations_list[1].reason[2].violation"},
    {label:"violation Date", key:"violations_list[1].reason[2].modified"},
    {label:"Sticker 3 info", key:""},
    {label:"violations1", key:"violations_list[2].reason[0].violation"},
    {label:"violation Date", key:"violations_list[2].reason[0].modified"},
    {label:"violations2", key:"violations_list[2].reason[1].violation"},
    {label:"violation Date", key:"violations_list[2].reason[1].modified"},
    {label:"violations3", key:"violations_list[2].reason[2].violation"},
    {label:"violation Date", key:"violations_list[2].reason[2].modified"},
    ]

    // const total = {car_amount:11,car_tow:3}
    const updatedArr = [totals,...logs]
    const data = updatedArr
    return (
        <div>
            <CSVLink
                className='btn btn-primary'
                data={data}
                headers={headers}
                filename={`${community_name}Car Stats`}
                target="_blank"
                >
                    Download CSV
            </CSVLink>
        
        </div>
    );
}

export default LogCsv;
