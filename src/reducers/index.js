import {combineReducers} from 'redux'
import communities from './community'
import cars from './cars'
import auth from './auth'
import comments from './comments'
import sticker from './sticker'
import image from './image'
import violations from './violation'
import safeList from './safeList'
import cindex from './carIndex'
import indexTotal from './indextotal'
import vProfile from './vProfileRed'
import violationList from './violationArr'
import liveCalls from './liveCallsR'
export default combineReducers({communities,cars,auth,comments,sticker,image,violations,safeList,cindex,indexTotal,vProfile,violationList,liveCalls})