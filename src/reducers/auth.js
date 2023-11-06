import {AUTH,LOGOUT, USERACCESS, ADMINACCESS, LOGOUT2} from '../constants/actionTypes'

// const authReducer = (state={authData:null},action) => {
//     switch (action.type) {
//         case AUTH:
//                 localStorage.setItem('profile',JSON.stringify({...action?.data}))
//                 return {...state,authData:action?.data}
//         case LOGOUT:
//                 localStorage.clear()
//                 return {...state,authData: null}
//         default:
//            return state;
//     }
// }
// const authReducer = (state=false,action) => {
//     switch (action.type) {
//         case USERACCESS:
//                 const admins =action.data.user.admin
//                 const email = action.data.user.displayEmail
//                 // console.log('Admins',action.data.user.admin)
//                 // console.log('Emails',action.data.user.displayEmail)
//                 return admins.includes(email) ? true : false   
//         default:
//            return state;
//     }
// }
const authReducer = (state={admin:false,user:false},action) => {
    switch (action.type) {
        case ADMINACCESS:
                const admins =action.data.user.admin
                const email = action.data.user.displayEmail
                // console.log('Admins',action.data.user.admin)
                // console.log('Emails',action.data.user.displayEmail)
                return admins.includes(email) ? {...state,admin:true} : {...state,admin:true}   
        case USERACCESS:
                return action.data ? {...state,user:true} : {...state,user:false}
        case LOGOUT2:
                return {...state,admin:false,user:false}
        default:
           return state;
    }
}

export default authReducer;