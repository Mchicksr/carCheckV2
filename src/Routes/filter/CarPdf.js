import React,{ useRef, useState } from 'react';
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

    const carInfoList = () => {
        const result = cars.map((item,index) => {
            const reasonAarr = []
            const reasonParts = item.violations_list.map((item,index)=>{
                item.reason.forEach((res)=>{
                    reasonAarr.push(res.violation)
                })
            })
            const reasonStr = reasonAarr.join('/')
            return <li key={index} className='text-left'>{`${index + 1}.`} {item.color} {item.car_make} {item.car_model} {format(item.modified, 'M/DD/YYYY')} {reasonStr}</li>

        });
        return result;
    }

    const carTowInfoList = () => {
        const towedArr = []
        const filterC = cars.map((item,index)=>{
            if(item.violations_list.length >= 3){
             towedArr.push(item.license_plate)
            }
        })

        if(towedArr.length > 0){
            const result = towedArr.map((item,index)=>{
                console.log('towedArr',item)
                return <li key={index} className='text-left'>{item}</li>
    
            })
            return result
        } else {
            return <li  className='text-left'>None</li>
        }
    } 
    
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
        <PrintLog ref={componentRef} carInfo={carInfoList} towInfo={carTowInfoList} noteList={formatNoteList} summary={carsOverView}/>
        <div className="bg-secondary">
            <form action="" onSubmit={addToNoteList}>
                <label htmlFor="">Create Note</label><br />
                <p>Add One note a time</p> <br></br>
            <textarea name="" id="" cols="30" rows="10" value={singleNote} onChange={(e) => setSingleNote(e.target.value)}></textarea> <br />
            <button type='submit' className='btn-primary'>Create Note</button>
            </form>
        </div>
      </div>
    );
}

export default CarPdf;