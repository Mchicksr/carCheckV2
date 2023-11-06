import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth, googleProvider} from '../../firebase/fbConfig'
import { updateProfile } from 'firebase/auth';

import { signin } from '../../actions/auth';
import { adminAccess, userAccess } from '../../actions/auth';
import {  useHistory } from 'react-router-dom'
import {AppBar,Toolbar,Typography,Avatar,Button,Paper,Grid,Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './Styles'
import Input from './Input'

const GsignIn = () => {
    const navigate = useHistory();
    const classes = useStyles()
    const dispatch = useDispatch()

    const admin = ["michaelhr1@yahoo.com","mhicksrichardson@gmail.com","flcarcheck@gmail.com" ]

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword,setShowPassword] = useState(false)
    const [displayName, setDisplayName] = useState('')   
    const [isSignup,setIsSignup] = useState(false)
    const [ActiveUser,setActiveUser] = useState(localStorage.getItem('profile'))



    // useEffect(() => {

        
        
    //     setActiveUser(JSON.parse(localStorage.getItem('profile')))
    // },[location,logout,])
////////////////////////////Sign Up //////////////////////
const onSubmit = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)

    .then((useCredentials) => {
        const user = useCredentials.user;
        updateProfile(user,{displayName:displayName})
        localStorage.setItem('profile',JSON.stringify(user))
        const displayEmail = user.email
            dispatch(adminAccess({displayEmail,admin}))
        // console.log('user',user) 
        navigate.push('/home')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error',errorMessage)
    });
}
////////////////////////////Sign Up //////////////////////



    const signIn = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem('profile',JSON.stringify(user))
            const displayEmail = user.email
            if(admin.includes(displayEmail)){
                dispatch(adminAccess({displayEmail,admin}))
            }
            dispatch(userAccess({user}))

            // console.log('user',user)
        })
        .then(()=>{
            navigate.push('/home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error',errorMessage)
        });
    }

    const signInWithGoogle =  (e) => {
        e.preventDefault()
        try {
             signInWithPopup(auth, googleProvider)
             .then(userCredential => {
                const user = userCredential.user;
                localStorage.setItem('profile',JSON.stringify(user))
                const displayEmail = user.email
            dispatch(adminAccess({displayEmail,admin}))

                // <Link to="/home"/>
                // console.log('user',user)
             
             })
        } catch (error) {
            console.log(error)
        }
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword=>!prevShowPassword))
    return (
        <main >        
        {/* <section>
            <div>                                            
                <h1> Sign in </h1>                       
                                               
                <form>                                              
                    <div>
                        <label htmlFor="email-address">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"                                    
                            required                                                                                
                            placeholder="Email address"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"                                    
                            required                                                                                
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                                        
                    <div className='my-3 row justify-content-center'>
                        <button className="p-2" onClick={signIn}>Login</button>
                        <button className="btn-primary ml-3 p-2" onClick={signInWithGoogle}>Sign in with google</button>
                    </div>                               
                </form>
               
                <p className="text-sm text-white text-center">
                    No account yet? {' '}
                    <button style={{border:"none"}} className="btn btn-transparent text-white" onClick={() => setIsSignup(!isSignUp)}>Sign up</button>
                </p>
                                           
            </div>
        </section> */}
        {!isSignup ? 
             <Container component="main" maxWidth="xs">
             <Paper className={classes.paper} elevation={3}>
                 <Avatar className={classes.avatar}>
                     <LockOutlinedIcon/>
                 </Avatar>
                 <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                 <form aciton="" className={classes.form} >
                     <Grid container spacing={2}>
                         {/* {
                             isSignUp && ( */}
                                 <>
                                     <Input name="Email" label="Email" handleChange={(e)=>setEmail(e.target.value)} />
                                     {/* <Input name="lastName" label="Last Name" handleChange={(e)=>setPassword(e.target.value)} alf/> */}
                                     <Input name="password" label="Password" handleChange={(e)=>setPassword(e.target.value)} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                                 </>
                             {/* // )}
                             <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                             <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                             {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>} */}
                     </Grid>
                     <Button type="button" fullWidth variant="contained" color="primary" className={classes.submit} onClick={signIn}>
                         {isSignup ? 'Sign Up' : 'Sign In'}
                     </Button>
                     <Button type="button" fullWidth variant="contained" color="default" className={classes.submit} onClick={signInWithGoogle}>
                         Sign in with Google
                     </Button>
                 </form>
                 <Grid container justifyContent="flex-end">
                     <Grid item>
                             <Button type="button" onClick={() => setIsSignup(!isSignup)}>{isSignup ? 'Already have an account? Sign In' :  'Dont have an account? sign up'}</Button>
                     </Grid>
                 </Grid>
             </Paper>
         </Container>
        : 
        <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form aciton="" className={classes.form} >
                <Grid container spacing={2}>
                    {/* {
                        isSignup && ( */}
                            <>
                                <Input name="UserName" label="UserName" handleChange={(e)=>setDisplayName(e.target.value)} alf/>
                                <Input name="Email" label="Email" handleChange={(e)=>setEmail(e.target.value)} />
                                <Input name="password" label="Password" handleChange={(e)=>setPassword(e.target.value)} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                            </>
                        {/* // )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>} */}
                </Grid>
                <Button type="button" fullWidth variant="contained" color="primary" className={classes.submit} onClick={onSubmit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                {/* <Button type="button" fullWidth variant="contained" color="default" className={classes.submit} onClick={signInWithGoogle}>
                    Sign in with Google
                </Button> */}
                <Button type="button" fullWidth variant="contained" color="default" className={classes.submit} onClick={signInWithGoogle}>
                         Sign up with Google
                     </Button>
            </form>
            <Grid container justifyContent="flex-end">
                <Grid item>
                        <Button type="button" onClick={() => setIsSignup(!isSignup)}>{isSignup ? 'Already have an account? Sign In' :  'Dont have an account? sign up'}</Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>                  
        }
       
        
    </main>
    );
};

export default GsignIn;