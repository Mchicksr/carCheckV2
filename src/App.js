import React,{useEffect,useState} from 'react';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { Route, Switch} from 'react-router-dom'
import {getCars} from './actions/cars'
import {getCommunities} from './actions/community'
import Navbar from './Routes/navBar/Navbar';
import UserProfile from './Routes/userProfile/UserProfile'
import Tags from './Routes/tags/Tags';
import TagCard from './components/tagPage/tagCard/SingleTagCard';
import renderCarTags from './helpers/routerHelper'
import Profile from './Routes/carprofile/CarProfile';
import Tow from './Routes/tow/Tow';
import CarEntryForm from './Routes/carEntryForm/carEntryForm';
import AuthPath from './Routes/auth/AuthPath';
import Fax from './components/towForm/Fax';


function App() {
  const cars = useSelector((state)=> state.cars)
  const communities = useSelector((state) => state.communities)
  const [searchTerm,setSearchTerm] = useState("")
  const [manager,setManager] = useState(false)
  const dispatch = useDispatch()
  const access = '61a94e4adba13dd081420629'
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    dispatch(getCars())
    dispatch(getCommunities())
    user?.result?._id === access ? setManager(true) : setManager(false)
  }, [dispatch,user?.result?._id])

  return (
    <div className="App"> 
      <Navbar manager={manager}/>    
      <Switch> 
        <Route path="/Fax" render={() => <Fax manager={manager}/>}/>
        <Route path="/Login" component={AuthPath}/>
        <Route path="/Carform" render={() => <CarEntryForm communities={communities} cars={cars} user={user}/>}/>
        <Route path='/TowForm' component={Tow}/>
        <Route path='/Profile/:searchTerm' render={() => <Profile cars={cars}/>}/>
        <Route path='/Tags' render={() => <Tags renderCarTags={renderCarTags} Route={Route} cars={cars} TagCard={TagCard} searchTerm={searchTerm} setSearchTerm={setSearchTerm} manager={manager} user={user}/>}/>
        <Route path='/' exact component={UserProfile}/>
      </Switch>

    </div>
  );
}

export default App;
