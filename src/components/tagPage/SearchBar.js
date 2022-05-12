import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getCar} from '../../actions/cars';
// import {Link} from 'react-router-dom'
function SearchBar({searchTerm,setSearchTerm,setCarArr}) {
    const cars = useSelector((state)=> state.cars)
    console.log('check',cars)
    const dispatch = useDispatch()

    return (
        <div>
            <h2 className="tagSub">Tag Number</h2>
              <form>
              <label htmlFor="TagNumber"></label> 
              <input className="TFInput" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input><br></br>
              <button type="button" onClick={() => dispatch(getCar(searchTerm))}>Search</button>
              {/* <Link className="TFBtn" to={`/Profile/${searchTerm}`}>Submit</Link> */}
          </form>
          <p>{cars.map(car =>{
              
              return <p>{car.car_make}</p> 
          })}</p>
        </div>
    );
}

export default SearchBar;