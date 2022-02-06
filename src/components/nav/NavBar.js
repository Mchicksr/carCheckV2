import React,{useState,useEffect,useCallback} from 'react';
import logo from '../../images/Car_check.png'
import {Link,useHistory,useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import './nav.css'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles'

 
// const pages = ['Products', 'Pricing', 'Blog'];
const pages = [<li><Link className="navLink" to='/Tags'><p className="navLink">Find Car Tags</p></Link></li>,
              <li className="navItem"><Link className="navLink" to='/CarForm'><p className="navLink">Add Car</p></Link></li>,
              <li className="navItem"><Link to='/CarLog'><p>Car Log</p></Link></li>,
              <li className="navItem"><Link className="navLink" to='/Fax'><p className="navLink">Tow Car</p></Link></li>
                  ]
// const settings = ['Profile', 'Account', 'Dashboard'];

function Navbar({manager}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
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
        <AppBar position="static" color="transparent">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <Link to="/"><img src={logo} alt="logo" className={classes.image} height="60"/></Link>

              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                 
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
                  {/* <ul className="navList">
                        <li><Link to='/Tags'><h3>Find Car Tags</h3></Link></li>
                        <li className="navItem"><Link to='/CarForm'><h3>Add Car</h3></Link></li>
                        <li className="navItem"><Link to='/Fax'><h3>Tow Car</h3></Link></li>
                        
                    </ul> */}
              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user ? (
                    <div>
                        <Typography className="classes userName" variant="h6">{user?.result.name}</Typography>
                        <Avatar  alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    </div>
                ):(
                        <Button component={Link} to="/Login" color="primary">sign in</Button>
                )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  
                  {user ? (
                    <div>
                        <Button  color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ):(
                        <Button component={Link} to="/Login" variant="contained" color="primary">sign in</Button>
                )}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    
}
 
export default Navbar;