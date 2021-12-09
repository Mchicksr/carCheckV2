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

function App() {
  const cars = useSelector((state)=> state.cars)
  const communities = useSelector((state) => state.communities)
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCars())
    dispatch(getCommunities())
  }, [dispatch])

  return (
    <div className="App"> 
      <Navbar/>    
      <Switch> 
        <Route path="/Login" component={AuthPath}/>
        <Route path="/Carform" render={() => <CarEntryForm communities={communities} cars={cars}/>}/>
        <Route path='/TowForm' component={Tow}/>
        <Route path='/Profile/:searchTerm' render={() => <Profile cars={cars}/>}/>
        <Route path='/Tags' render={() => <Tags renderCarTags={renderCarTags} Route={Route} cars={cars} TagCard={TagCard} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>
        <Route path='/' exact component={UserProfile}/>
      </Switch>

    </div>
  );
}

export default App;

