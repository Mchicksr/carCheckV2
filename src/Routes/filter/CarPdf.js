import React,{ useRef, useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';
import { PrintLog } from '../../components/carlog/PrintLog';
import {format} from 'date-fns'



function CarPdf(props) {
    const cars = useSelector((state)=>  state.cindex)
    const carsOverView = useSelector((state)=>  state.indexTotal)
    const componentRef = useRef();
    const [singleNote, setSingleNote] = useState('')
    const [note, setNote] = useState([])
    const [dates,setDates] = useState({date1:"",date2:""})

    useEffect(() => {
        setDates({...dates, date1:carsOverView.para1,date2:carsOverView.para2})
        
    }, [cars]);
    const carInfoList = () => {
        const result = cars.map((item,index) => {
            const reasonAarr = []
            const reasonParts = item.violations_list.map((item,index)=>{
                item.reason.forEach((res)=>{
                    reasonAarr.push(res.violation)
                })
            })
            const reasonStr = reasonAarr.join(', ')

return [<tbody>
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.license_plate}</td>
            <td>{item.color}</td>
            <td>{item.car_make}</td>
            <td>{item.car_model}</td>
            <td>{format(item.modified, 'M/DD/YYYY')}</td>
            <td>{reasonStr}</td>
        </tr>
        
        </tbody>
       ]
        });
        return result;
    }

    const carTowInfoList = () => {
        

        const towedArr = []
        const filterC = cars.map((item,index)=>{
            if(item.towed === true){
             towedArr.push(item)
            }
       
        })
        if(towedArr.length > 0){
            const result = towedArr.map((item,index)=>{
                const reasonArr = []
                item.violations_list.map((vio)=> vio.reason.forEach(reason => reasonArr.push(reason.violation)))
                const reasonStr = reasonArr.join(', ')

                return [
       
        <tbody>
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.license_plate}</td>
            <td>{item.color}</td>
            <td>{item.car_make}</td>
            <td>{item.car_model}</td>
            <td>{format(item.modified, 'M/DD/YYYY')}</td>
            <td>{reasonStr}</td>
        </tr>
        
        </tbody>
       ]
    
            })
            return result
        } else {
            return <li  className='text-left'>None</li>
        }
    } 

    // const tablehead = (index,license_plate,color,car_make,car_model,modified,reasonStr ) => {
    //     return (<table class="table table-striped">
    //     <thead>
    //     <tr>
    //         <th scope="col">#</th>
    //         <th scope="col">license Plate</th>
    //         <th scope="col">Color</th>
    //         <th scope="col">Car Make</th>
    //         <th scope="col">Car Model</th>
    //         <th scope="col">Date Added</th>
    //         <th scope="col">Violations</th>
    //     </tr>
    //     </thead>
    //     <tbody>
    //     <tr>
    //         <th scope="row">{index + 1}</th>
    //         <td>{license_plate}</td>
    //         <td>{color}</td>
    //         <td>{car_make}</td>
    //         <td>{car_model}</td>
    //         <td>{format(modified, 'M/DD/YYYY')}</td>
    //         <td>{reasonStr}</td>
    //     </tr>
        
    //     </tbody>
    //     </table>
    //     )
        
    // }
 
    // const carTowInfoList = () => {
        

    //     const towedArr = []
    //     const filterC = cars.map((item,index)=>{
    //         if(item.towed === true){
    //          towedArr.push(item)
    //         }
       
    //     })
    //     if(towedArr.length > 0){
    //         const result = towedArr.map((item,index)=>{
    //             const reasonArr = []
    //             item.violations_list.map((vio)=> vio.reason.forEach(reason => reasonArr.push(reason.violation)))
    //             const reasonStr = reasonArr.join(', ')

    //             return tablehead(index,item.license_plate,item.color,item.car_make,item.car_model,item.modified,reasonStr)
    
    //         })
    //         return result
    //     } else {
    //         return <li  className='text-left'>None</li>
    //     }
    // } 
 
    
    const addToNoteList = (e) => {
        e.preventDefault()
        setNote([...note,singleNote])
        setSingleNote('')
    }
    const formatNoteList = () => {
        const result = note.map((item,index)=>{
            return <li key={index} className='text-left'>{item}</li>
        })
        return result
    }


    return (
        <div>
        <ReactToPrint
          trigger={() => <button className='btn btn-primary mt-4'>Create PDF</button>}
          content={() => componentRef.current}
        //   copyStyles={false}
        />
        <PrintLog ref={componentRef} carInfo={carInfoList} towInfo={carTowInfoList} noteList={formatNoteList} summary={carsOverView} dateParams={dates}/>
        <div className="bg-secondary">
            <form action="" onSubmit={addToNoteList}>
                <label htmlFor="">Create Note</label><br />
                <p>Add One note at a time</p> <br></br>
            <textarea name="" id="" cols="30" rows="10" value={singleNote} onChange={(e) => setSingleNote(e.target.value)}></textarea> <br />
            <button type='submit' className='btn-primary'>Create Note</button>
            </form>
        </div>
      </div>
    );
}

export default CarPdf;