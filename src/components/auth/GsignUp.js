import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth, googleProvider } from '../../firebase/fbConfig'
import { updateProfile } from 'firebase/auth';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {AppBar,Toolbar,Typography,Avatar,Button,Paper,Grid,Container} from '@material-ui/core'

import useStyles from './Styles'
import Input from './Input'

const GsignUp = ({setIsSignup,isSignUp}) => {
    const navigate = useHistory()
    const classes = useStyles()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [displayName, setDisplayName] = useState('')   

    const [showPassword,setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword((prevShowPassword=>!prevShowPassword))

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)

        .then((useCredentials) => {
            const user = useCredentials.user;
            updateProfile(user,{displayName:displayName})
            console.log('user',user)
            // Link("/login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error',errorMessage)
        });
    }
    return (
        <main >        
        {/* <section>
            <div>
                <div>                  
                    <h1> Create an account </h1>                                                                            
                    <form>                                                                                            
                        <div>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                label="Name"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}  
                                required                                    
                                placeholder="UserName"                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <button style={{border:"none"}} className="btn btn-transparent text-white" onClick={() => setIsSignup(!isSignUp)}>Sign in</button>

                    </p>                   
                </div>
            </div>
        </section> */}

        <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form aciton="" className={classes.form} >
                        <Grid container spacing={2}>
                            {/* {
                                isSignUp && ( */}
                                    <>
                                        <Input name="UserName" label="UserName" handleChange={(e)=>setDisplayName(e.target.value)} alf/>
                                        <Input name="Email" label="Email" handleChange={(e)=>setEmail(e.target.value)} />
                                        <Input name="password" label="Password" handleChange={(e)=>setPassword(e.target.value)} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                                    </>
                                {/* // )}
                                <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                                {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>} */}
                        </Grid>
                        <Button type="button" fullWidth variant="contained" color="primary" className={classes.submit} onClick={onSubmit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        {/* <Button type="button" fullWidth variant="contained" color="default" className={classes.submit} onClick={signInWithGoogle}>
                            Sign in with Google
                        </Button> */}
                    </form>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                                <Button type="button" onClick={() => setIsSignup(!isSignUp)}>{isSignUp ? 'Already have an account? Sign In' :  'Dont have an account? sign up'}</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
    </main>
    );
};

export default GsignUp;