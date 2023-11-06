import React, {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { onAuthStateChanged,signInWithPopup,signOut } from 'firebase/auth';
import { auth } from '../../firebase/fbConfig';
import { logout2 } from '../../actions/auth';
import GsignIn from './GsignIn';
// import { useDispatch } from 'react-redux';
import GsignUp from './GsignUp';



const Gauth = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useState(null);
    const [isSignup,setIsSignup] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
        return() =>{
              listen()
        }
    },[])

    

    const userSignOut = () => {
        signOut(auth).then(() => {
            setAuthUser(null)
            localStorage.clear()
            dispatch(logout2())
            history.push('/Login')
        }).catch((error) => {
            console.log(error)
        });
    }
    console.log('authUser',authUser)
    return (
        <div>
            {authUser ? 
            <>
            <p>{`Signed in as ${authUser?.email}`}</p>
            <button className='btn btn-primary' onClick={userSignOut}>Sign out</button>
             </> 
            :
            <>Signed Out</>}
            {/* {isSignup ?
              <GsignUp setIsSignup={setIsSignup} isSignUp={isSignup}/>
            :

            // <GsignIn setIsSignup={setIsSignup} isSignUp={isSignup}/>
        } */}
        <GsignIn />
        </div>
    );
};

export default Gauth;