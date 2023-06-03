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

  
function App() {
  const cars = useSelector((state)=>  state.cars)
  const communities = useSelector((state) => state.communities)
  // const violations = useSelector((state)=>state.violations)
  const [carArr, setCarArr] = useState([])
  const [searchTerm,setSearchTerm] = useState("")
  const [safeMessage, setSafeMessage] = useState("")
  const [manager,setManager] = useState(false)
  const [towManager,setTowManager] = useState(false)
  const [creator,setCreator] = useState(false)
  const [safe,setSafe] = useState(false)
  const dispatch = useDispatch()
  const access = '61a94e4adba13dd081420629'
  const access2 = '61bb63d143156f329531f69b'
  const access3 = "mikehicks@gmail.com"
  const user = JSON.parse(localStorage.getItem('profile'))
  const [violationCount, setViolationCount] = useState()
  // const user = localStorage.getItem("user");
  const [show,setShow] = useState(false)
  // Google Auth state
  // const [googleUser, setGoogleUser] = useState({})
  // const profiles = ['mhicksrichardson@gmail.com','mikehicks','djsoundna@gmail.com']
  // const allAccess = googleUser?.email
  // console.log('SDFDSA')


// console.log('check',cars.map(item => item.violations_list))

  useEffect(() => {
    // dispatch(getCar({id:carArr}))
    dispatch(getCommunities())
    dispatch(getViolations())
    // user?.result?._id === access && access2 && access3? setManager(true) : setManager(false)
    // user?.result?._id === access || access2 || access3? setManager(true) : setManager(false)
    user?.result?.email === access3 || access2 ? setManager(true) : setManager(false)
    user?.result?._id === access2 ? setTowManager(true) : setTowManager(false)
    user?.result?._id === access ? setCreator(true) : setCreator(false)

    // const theUser = localStorage.getItem("user");

    // if (theUser && !theUser.includes("undefined")) {
    //   setGoogleUser(JSON.parse(theUser));
    // }

    // profiles.map((pass)=>{
    //   if(allAccess === pass ){
    //     setManager(true)
    //   } else {
    //     return null
    //   }

    // })
  }, [dispatch,user?.result?._id,user?.result?.email])
  return (


    <div className="App"> 
    
    {/* <Navbar manager={manager}/> */}
    <NewNav manager={manager}/>    
    {/* --------------------------------------------------------------------------------------- */}
    {/* {manager ? 
      <>
      <h1 className="text-warning">Form App</h1>
      <input type="text" placeholder="Name" /><br />
      <input type="text" placeholder="Email" /><br />
      <button href="#" className="btn btn-primary">Submit</button>
      </>
      : 
      <>
        <h2>Please sign in</h2>
      </>
      }
      
    <button className=" btn btn-primary" onClick={()=>{
      localStorage.removeItem("user");
      window.location.reload();
    }}>logout</button>
      <Routes>
        <Route
          path="/"
          element={googleUser?.email ? <Navigate to="/home" /> : <Landing />}

        />
        <Route
          path="/signup"
          element={googleUser?.email ? <Navigate to="/home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={googleUser?.email ? <Navigate to="/home" /> : <Login />}
          />
        <Route
          path="/home"
          element={googleUser?.email ? <Home user={googleUser} /> : <Navigate to="/" />}
          // element={<Navigate to="/home" />}
        />
              <Route path="/Carform" render={() => <CarEntryForm communities={communities} cars={cars} user={user}/>}/>

      </Routes> */}

{/* --------------------------------------------------------------------------------------- */}




 
      
      {/* <Route path='/' exact component={UserProfile}/> */}
      {/* <Route path='/'/> */}
      {/* <Route path="/CarLog" element={<CarLog cars={cars} communities={communities} violations={violations}/>}/> */}
      <Route path="/carLog"  exact render={() => <CarIndex manager={manager}/>} />
      <Route path="/Fax" render={() => <Fax manager={manager} creator={creator} towManager={towManager}/>}/>
      <Route path="/Login" component={AuthPath}/>
      <Route path="/Carform" render={() => <CarEntryForm communities={communities} cars={cars} user={user}/>}/>
      <Route path='/TowForm' component={Tow}/>
      <Route path="/Email" render={() => <Emails/>}/>
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
         show={show} setShow={setShow} 
         communities={communities}
         setViolationCount={setViolationCount}
         violationCount={violationCount}
         safeMessage={safeMessage}
         setSafeMessage={setSafeMessage}
         />}
         /> 

        
        <Route path='/community' render={() => <CommunityForm/>}/>

    
      
  
  </div>

    // <div className="App"> 
    //   <Navbar manager={manager}/>    
    //   <Switch> 
    //     <Route path="/CarLog" render={() => <CarLog cars={cars} communities={communities} violations={violations}/>}/>
    //     <Route path="/Fax" render={() => <Fax manager={manager} creator={creator} towManager={towManager}/>}/>
    //     <Route path="/Login" component={AuthPath}/>
    //     <Route path="/Carform" render={() => <CarEntryForm communities={communities} cars={cars} user={user}/>}/>
    //     <Route path='/TowForm' component={Tow}/>
    //     <Route path='/Profile/:searchTerm' render={() => <Profile cars={cars}/>}/>
    //     <Route path='/Tags' render={
    //       () => <Tags 
    //         car={carArr} 
    //         renderCarTags={renderCarTags} 
    //         Route={Route} cars={cars} 
    //         TagCard={TagCard} searchTerm={searchTerm} 
    //         setSearchTerm={setSearchTerm} 
    //         manager={manager} 
    //         user={user} 
    //         creator={creator} 
    //         safe={safe} 
    //         setSafe={setSafe} 
    //         setCarArr={setCarArr}
    //        show={show} setShow={setShow} 
    //        communities={communities}/>}/>
    //     <Route path='/' exact component={UserProfile}/>
    //   </Switch>

    // </div>
  );
}

export default App;

