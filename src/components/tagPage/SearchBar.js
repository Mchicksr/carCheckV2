import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getCar} from '../../actions/cars';
// import {Link} from 'react-router-dom'
function SearchBar({searchTerm,setSearchTerm,setCarArr,setShow,communities}) {
    const cars = useSelector((state)=> state.cars)
    const [carResult,setCarResult ] = useState('')
    const numOfCars = cars.length
    const dispatch = useDispatch()

    
    console.log('check',cars)
    // setCarResult(numOfCars) 

    console.log('CR',carResult)
    const findCar = async () =>{
        // console.log('clicks')
        await dispatch(getCar(searchTerm))
        setShow(true)

        if(searchTerm == 0){
            setCarResult('Type License Plate in Field')
        } else {
            console.log('check length',cars)
             setCarResult(numOfCars) 
             return await carResult
        }
        
    }

    const carName = () => {
        let carResult;
        let commute;
       carResult = cars.map(car => {
            return car.community_id
        })

        commute = communities.map(place =>{
            return <li key={place.id}>{place.community.children}</li>
        })
        console.log('commute',commute)
        return carResult
    }

    console.log('cName',carName())
    return (
        <div>
            <h2 className="tagSub">Tag Number</h2>
              <form>
              <label htmlFor="TagNumber"></label> 
              <input className="TFInput" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input><br></br>
              {/* <button type="button" onClick={() => dispatch(getCar(searchTerm))}>Search</button> */}
              <button class="btn btn-primary" type="button" onClick={findCar}>Search</button>
              {/* <Link className="TFBtn" to={`/Profile/${searchTerm}`}>Submit</Link> */}
          </form>
          {/* <p>{cars.map(car =>{
              
              return <p>{car.car_make.length}</p> 
          })}</p> */}
          
          <p> Results: {carResult}</p>
          <p>Communities: {carName()}</p>
        </div>
    );
}

export default SearchBar;