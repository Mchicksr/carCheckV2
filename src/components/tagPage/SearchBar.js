import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getCar} from '../../actions/cars';
// import CarEntryForm from '../../Routes/carEntryForm/carEntryForm';
import CarForm from '../carForm/CarForm';
import './SearchBar.css'

import axios from 'axios';
// import {Link} from 'react-router-dom'
function SearchBar({searchTerm,setSearchTerm,setCarArr,setShow,communities}) {
    const cars = useSelector((state)=> state.cars)
    const [carResult,setCarResult ] = useState('')
    const [numOfCars,setNumofCars] = useState({num:cars.length})
    const [carNum, setCarNum] = useState(0)
    const [formModal, setFormModal] = useState(false)
    // const [numOfCars,setNumofCars] = useState(0)
    // const numOfCars = cars.length
    const dispatch = useDispatch()
   
   const myUrl = new URL('http://localhost:3000/')
   const Url = new URL(window.location.href)
    
    useEffect(() => {
   
    setNumofCars((prev) =>{ 
        return {...prev, num:cars.length}
        })
    }, [cars.length, carResult]);


    const findCar = async () =>{
        
        await dispatch(getCar(searchTerm))
        setShow(true)

        if(searchTerm == 0){
            setCarResult('Type License Plate in Field')
            activateForm()
        } else {
          
          

            setCarResult(numOfCars.num)
          
        }
        
    }

    const carName = () => {
        

        let carResult;
        let commute;
       carResult = cars.map(car => {
            communities.filter((coms, index) =>{
                if(coms._id == car.community_id){
                    commute = coms.community
                }
            } )
            return commute
        })

  
        return carResult
    }

    const activateForm = () =>{

        // if(cars.length === 0){
            // return <CarEntryForm/>
            // return <CarEntryForm communities={communities} cars={cars} user={user}/>
            return <CarForm communities={communities}/>
        // } else {
        //     console.log('good')
        //   return null
        // }
    }

    const triggerForm = () =>{
        setFormModal(()=>{return !formModal })
       
    }
  
    return (
        <div>
            <button className='btn btn-primary' onClick={triggerForm}>{formModal ? 'Hide Form' : 'Show Form'}</button>
            <div className={formModal ? 'showForm' : 'hideForm'}>
                {activateForm()}
            </div>
            <h2 className="tagSub">Tag Number</h2>
              <form>
              <label htmlFor="TagNumber"></label> 
              <input className="TFInput" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input><br></br>

              <button className="btn btn-primary" type="button" onClick={findCar}>Search</button>

          </form>
      
        
          <p> Results: {numOfCars.num}</p>
          <p>Communities: {carName()}</p>

        </div>
    );
}

export default SearchBar; 