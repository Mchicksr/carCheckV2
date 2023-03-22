import React from 'react';
import CommunityNav from '../../components/tagPage/community/CommunityNav';
import SearchBar from '../../components/tagPage/SearchBar';
// import SafeList from '../../components/tagPage/tagCard/safeList';
import Profile from '../carprofile/CarProfile';
import ShowRules from '../../components/community/ShowRules';
import SafeListRoute from '../safeList/SafeListRoute';
// import { NavLink,Routes } from 'react-router-dom';
// import DateFilter from '../../components/tagPage/filter/DateFilter'

function Tags({RenderCarTags, Route, cars, TagCard,searchTerm, setSearchTerm,manager,user,creator,safe,setSafe,setCarArr,show,setShow, communities,setViolationCount,violationCount}) {
//    console.log('cars',cars)
    return (
        <div>
            
            {user?<>
            <h1>Car Tags</h1>
            {/* <SafeList safe={safe} setSafe={setSafe}/> */}
            <ShowRules communities={communities}/>
            <SearchBar setCarArr={setCarArr} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setShow={setShow} cars={cars} communities={communities}/>
            <CommunityNav/>
            {/* <SafeList safe={safe} setSafe={setSafe}/> */}
            <Route path="/Tags/:id" component={() => <SafeListRoute safe={safe}  setSafe={setSafe} cars={cars}/>}/>
           

            {/* <Route path="/Tags/:id" component={<SafeListRoute safe={safe}  setSafe={setSafe} cars={cars}/>}/> */}
           
            
            
            {cars.length === 0 && show ? <p>no cars with that name</p> : 
            
            RenderCarTags(Route,cars,TagCard,searchTerm,manager,creator,safe,show,setShow,violationCount)
            }
            
            
            </>:<h1>Please Login</h1>}
            <Route path="/Tags/:id/:searchterm" component={() => 
        (
            cars.map((car,index)=>{
                return <Profile 
                    key={index}
                    violations={car.violations}
                    lic={car.license_plate}
                    cm ={car.car_make}
                    cmo = {car.car_model}
                    id={car._id}
                    address={car.car_address}
                    color={car.color}
                    modified={car.modified}
                    sticker={car.sticker}
                    manager={car.manager}
                    creator={creator}
                    violations_list={car.violations_list}
                    safe={car.safe}
                    setViolationCount={setViolationCount}
                />

            })
        )   
            }/>
      

  
       
            
     
        </div>
    );
}

export default Tags; 

// directed from 