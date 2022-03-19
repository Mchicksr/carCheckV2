import React,{useState,useEffect,useCallback} from 'react';
import {AppBar,Toolbar,Typography,Avatar,Button} from '@material-ui/core'
import logo from '../../images/official-logo'
import {Link,useHistory,useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import './nav.css'
import useStyles from './styles'

function Nav(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))


    const logout = useCallback(() => {
  
        dispatch({type:'LOGOUT'})
        history.push('/')
        setUser(null)
    },[dispatch,history])
    

    useEffect(() => {
        const token = user?.token

        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime())
            logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location,logout,user?.token])
    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="transparent">
                <div className={classes.brandContainer}>
                    <Link to="/"><img src={logo} alt="logo" className={classes.image} height="60"/></Link>
                    <ul className="navList">
                        <li className="navItem"><Link to='/Tags'><h2>Find Car Tags</h2></Link></li>
                        <li className="navItem"><Link to='/CarForm'><h2>Add Car</h2></Link></li>
                        <li className="navItem"><Link to='/Fax'><h2>Tow Car</h2></Link></li>
                        <li className="navItem"><Link to='/CarLog'><h2>Car Log</h2></Link></li>
                        
                    </ul>
                </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className="classes userName" variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ):(
                        <Button component={Link} to="/Login" variant="contained" color="primary">sign in</Button>
                )}

            </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;