import {combineReducers} from 'redux'
import communities from './community'
import cars from './cars'
import auth from './auth'
import comments from './comments'
import sticker from './sticker'
import image from './image'
import violations from './violation'
export default combineReducers({communities,cars,auth,comments,sticker,image,violations})