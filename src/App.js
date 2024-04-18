import React,{useEffect,useState} from 'react';
   
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
// import { Route, Switch, Routes, Navigate} from 'react-router-dom';
import { Route} from 'react-router-dom';
// import { Home, Landing, Login, Signup } from "./screens";
// import {getCar} from './actions/cars'
import {getCommunities} from './actions/community'
import { getViolations } from './actions/violation';
// import Navbar from './Routes/navBar/Navbar';
import UserProfile from './Routes/userProfile/UserProfile'
import Tags from './Routes/tags/Tags';
import TagCard from './components/tagPage/tagCard/SingleTagCard';
import RenderCarTags from './helpers/routerHelper'
// import Profile from './Routes/carprofile/CarProfile';
import Tow from './Routes/tow/Tow';
import CarEntryForm from './Routes/carEntryForm/carEntryForm';
import AuthPath from './Routes/auth/AuthPath';
import Fax from './components/towForm/Fax';
// import CarLog from './Routes/filter/CarLog';
import CommunityForm from './Routes/communityForm/communityForm';
// import SafeListRoute from './Routes/safeList/SafeListRoute';
import NewNav from './components/nav/NewNav';
import CarIndex from './Routes/index/carIndex';
import Emails from './Routes/tow/Emails';
import CurrentLocation from './components/location/CurrentLocation';
import Gauth from './components/auth/Gauth';
import Admin from './Routes/admin/Admin';
import { getViolationList } from './actions/violationArr';

  
function App() {
  const cars = useSelector((state)=>  state.cars)
  const communities = useSelector((state) => state.communities)
  const AdminAccess = useSelector((state)=>state.auth)
  const [carArr, setCarArr] = useState([])
  const [searchTerm,setSearchTerm] = useState("")
  const [safeMessage, setSafeMessage] = useState("")
  const [manager,setManager] = useState(false)
  const [towManager,setTowManager] = useState(false)
  const [creator,setCreator] = useState(false)
  const [safe,setSafe] = useState(false)
  const dispatch = useDispatch()
  const access = '61a94e4adba13dd081420629'
  const access2 = 'parksmartfl@gmail.com'
  const access3 = "mikehicks@gmail.com"
  const access4 = "Drdonnah@me.com"
  const admin = ["michaelhr1@yahoo.com","mhicksrichardson@gmail.com","parksmartfl@gmail.com" ]
  let user = JSON.parse(localStorage.getItem('profile'))
  const [violationCount, setViolationCount] = useState()
  const [show,setShow] = useState(false)



  useEffect(() => {

    dispatch(getCommunities())
    dispatch(getViolations())
    dispatch(getViolationList())
    admin.includes(user?.email) ? setManager(true) : setManager(false)
    if(AdminAccess.admin ){
      setManager(true)
    }


  }, [dispatch,AdminAccess])

  return (

    <div className="App"> 
    
    <NewNav manager={manager}/>    

      <Route path='/admin' exact render={() => <Admin/>}/>
      <Route path="/carLog"  exact render={() => <CarIndex manager={manager}/>} />
      <Route path="/Fax" render={() => <Fax manager={manager} creator={creator} towManager={towManager}/>}/>
      <Route path="/Login" component={AuthPath}/>
      <Route path="/Carform" render={() => <CarEntryForm communities={communities} cars={cars} user={user}/>}/>
      <Route path='/TowForm' component={Tow}/>
      <Route path="/Email" render={() => <Emails manager={manager}/>}/>
       <Route path='/' render={() =>
         <Tags 
          car={carArr} 
          RenderCarTags={RenderCarTags} 
          Route={Route} 
          cars={cars} 
          TagCard={TagCard} searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          manager={manager} 
          user={user} 
          creator={creator} 
          safe={safe} 
          setSafe={setSafe} 
          setCarArr={setCarArr}
          communities={communities}
          setViolationCount={setViolationCount}
          violationCount={violationCount}
          safeMessage={safeMessage}
          setSafeMessage={setSafeMessage}
          show={show} setShow={setShow} 
         />}
         /> 

        
        <Route path='/community' render={() => <CommunityForm/>}/>

  </div>

  );
}

export default App;

