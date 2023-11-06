import React,{useState, useEffect} from 'react';
import CommunityNav from '../../components/tagPage/community/CommunityNav';
import SearchBar from '../../components/tagPage/SearchBar';
// import SafeList from '../../components/tagPage/tagCard/safeList';
import Profile from '../carprofile/CarProfile';
import ShowRules from '../../components/community/ShowRules';
import SafeListRoute from '../safeList/SafeListRoute';
import {useSelector} from 'react-redux'

// import { NavLink,Routes } from 'react-router-dom';
// import DateFilter from '../../components/tagPage/filter/DateFilter'

function Tags({RenderCarTags, Route, cars, TagCard,searchTerm, setSearchTerm,manager,user,creator,safe,setSafe,setCarArr,show,setShow, communities,setViolationCount,violationCount,safeMessage,setSafeMessage}) {
//    console.log('cars',cars)
const AdminAccess = useSelector((state)=>state.auth)
const Url = new URL(window.location)
const [comName,setComName] = useState('')
useEffect(() => {
     const getCommunityName = () => {
        let input = Url.pathname
        const Urlid = input.replace(/Tags\//, '')
        const id =Urlid .substring(1)
        
        const communityName = communities.find((community) => community._id === id)
        // console.log('communityName',communityName.community)
        setComName(communityName?.community)
    }
    getCommunityName()
},[Url])

useEffect(() => {
   if(AdminAccess.user){
    user = true
    return user
   } 

   if(!AdminAccess.user){
    user = false
    return user
   }
},[AdminAccess])



const getUrlPart = (url) => {
    const regex = /\/Tags\/(\w+)\//; // Regex pattern to match the desired part
    const match = url.match(regex);
    if (match && match.length > 1) {
      return match[1];
    }
    return null; // Return null if no match found
  };
 const ComId = getUrlPart(Url.pathname)

//  const getCommunityName = () => {
//     const id = input.replace(/^Tags\//, '')
//     console.log('id',id)
//     // if()
//  }


 return (
        <div>
            
            {user?<>
            <h1>Car Tags</h1>
            <h2>Select A Commuinity</h2>
            <CommunityNav/>
            <Route path="/Tags/:id" component={() => (
                <>
                    <h2>You Are Now In:</h2>
                    <h1 className='mb-5'>{comName}</h1>
                   
                    <ShowRules communities={communities}/>
                    <SafeListRoute safe={safe}  setSafe={setSafe} cars={cars} manager={manager}/>
                </>
                
            )}/>
            <SearchBar setCarArr={setCarArr} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setShow={setShow} cars={cars} communities={communities} safeMessage={safeMessage}/>

            {/* <Route path="/Tags/:id" component={<SafeListRoute safe={safe}  setSafe={setSafe} cars={cars}/>}/> */}
           
            
            
            {cars.length === 0 && show ? <p>no cars with that name</p> : 
            
            RenderCarTags(Route,cars,TagCard,searchTerm,manager,creator,safe,show,setShow,violationCount,setSafeMessage)
            }
            
            
            </>:<h1>Please Login</h1>}
            <Route path="/Tags/:id/:searchterm" component={() => 
        (
            cars.filter((car)=>{
               

                if(car.community_id === ComId){
                    return car
                }

            }).map((car,index)=>{
                // console.log('cr',car)
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
                    manager={manager}
                    creator={creator}
                    violations_list={car.violations_list}
                    safe={car.safe}
                    setViolationCount={setViolationCount}
                    image={car.car_image}
                    communityID={car.community_id}
                />

            })
        )   
            }/>
      

  
       
            
     
        </div>
    );
}

export default Tags; 

// directed from 