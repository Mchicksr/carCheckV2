import React from 'react';
import CommunityNav from '../../components/tagPage/community/CommunityNav';
import SearchBar from '../../components/tagPage/SearchBar';
import SafeList from '../../components/tagPage/tagCard/safeList';
// import DateFilter from '../../components/tagPage/filter/DateFilter'

function Tags({renderCarTags, Route, cars, TagCard,searchTerm, setSearchTerm,manager,user,creator,safe,setSafe,setCarArr,show,setShow, communities}) {
    return (
        <div>
            {user?<>
            <h1>Car Tags</h1>
            <SafeList safe={safe} setSafe={setSafe}/>
            <SearchBar setCarArr={setCarArr} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setShow={setShow} cars={cars} communities={communities}/>
            <CommunityNav/>
            {cars.length === 0 && show ? <p>no cars with that name</p> : 
            
            renderCarTags(Route,cars,TagCard,searchTerm,manager,creator,safe,show,setShow)
            }
            
            </>:<h1>Please Login</h1>}
        </div>
    );
}

export default Tags; 