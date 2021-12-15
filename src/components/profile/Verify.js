import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {verify} from '../../actions/cars'

function Verify({id,verified,manager}) {

    const dispatch = useDispatch()

    useEffect(() => {
        
    },[dispatch])
    return (
        <div>
            <h3>Verify Status</h3>
            {verified.map(item => {
                return item === "" ? "not verified" : <i className="fas fa-check-circle"></i>
            })} <br />
            {manager ? <> 
            <button onClick={()=> dispatch(verify(id))}>Verify</button>
            
            </>: null}
        </div>
    );
}

export default Verify;