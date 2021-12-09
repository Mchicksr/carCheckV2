import React,{useEffect} from 'react';
import { getCommunities } from '../../../actions/community';
import {useDispatch,useSelector} from 'react-redux';
import CommunityLink from './CommunityLink';
import './community.css'


function CommunityNav(props) {
    const community = useSelector((state)=>state.communities)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCommunities())
    },[dispatch])

    const communities = () =>(
        <>
        <div className="comNav">
            {
                community.map((item,index) => {
                    return <li key={index}><CommunityLink key={item.id} _id={item._id} name={item.community}/></li>
                })
            }
        </div>
        </>
    )
        
    
    return (
        <div>
            {communities()}
            {/* <h1>hey</h1> */}
        </div>
    );
}

export default CommunityNav;