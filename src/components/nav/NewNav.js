import React, {useState, useEffect,useCallback} from 'react';
import {Link,useHistory,useLocation} from 'react-router-dom' 
import {useSelector} from 'react-redux'
import { auth } from '../../firebase/fbConfig';
import { signOut } from 'firebase/auth';
import decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {Toolbar,Avatar,Button} from '@material-ui/core'
import logo from '../../images/official-logo.png'
import GsignIn from '../auth/GsignIn';
import { logout2 } from '../../actions/auth';


import useStyles from './styles'
import { G } from '@react-pdf/renderer';



const NewNav = ({manager}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [openLog, setOpenLog] = useState(false)
    const AdminAcess = useSelector((state)=>state.auth)

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')))  
    },[AdminAcess])
    const logout = useCallback(() => {
  
        dispatch({type:'LOGOUT'})
        history.push('/')
        // history('/')
        setUser(null)
    },[dispatch,history])

    useEffect(() => {
        const token = user?.token

        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime())
            logout()
        }
        // setUser(JSON.parse(localStorage.getItem('profile')))
    },[location,logout,user?.token])

const userSignOut = () => {
  signOut(auth).then(() => {
      // setAuthUser(null)
      localStorage.clear()
      dispatch(logout2())
      history.push('/Login')
  }).catch((error) => {
      console.log(error)
  });
}


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <Link to="/"><img src={logo} alt="logo" className={classes.image} height="60"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto text-white">
                        <li className="nav-item text-white"><Link to='/Tags'><p className='nav-link text-white'>Find Car Tags</p></Link></li>
                        {/* <li className="nav-item text-white"><Link to='/CarForm'><p className='nav-link text-white'>Add Car</p></Link></li> */}
                        {/* { manager ? */}
                        <>
                        {/* <li className="nav-item text-white"><Link to='/Fax'><p className='nav-link text-white'>Tow Car</p></Link></li> */}
                        <li className="nav-item text-white"><Link to='/Email'><p className='nav-link text-white'>Email to Tow</p></Link></li>
                        <li className="nav-item text-white"><Link to='/CarLog'><p className='nav-link text-white'>Car Log</p></Link></li>
                        </>
                        {/* : */}
                          {/* null */}
                      {/* } */}
                        {/* <li className="navItem"><Link to='/CarLog'><h2>Car Log2</h2></Link></li> */}
                        
                    </ul>
    
      <Toolbar className='row justify-content-center'>
                {user ? (
                    // <div className={classes.profile}>
                    <div className=''>
                      <button className='clear-btn' onClick={() => {setOpenLog(!openLog)}}> <Avatar className={`${classes.purple}`} alt={user?.displayName} src={user?.result?.imageUrl}>{user?.displayName?.charAt(0)}</Avatar></button>
                        <h6>{user?.displayName}</h6>
                       
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={userSignOut}>Logout</Button>
                    </div>
                     
                ):(
                <>
                        <Button component={Link} to="/Login" variant="contained" color="primary">sign in</Button>
                        {/* <GsignIn/> */}
                </>
                        // <Button component={Link} to="/Logins" variant="contained" color="primary">sign in</Button>
                )}

            </Toolbar>
  
  </div>
</nav>
    );
}

export default NewNav;
