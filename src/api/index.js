import axios from 'axios'
import config from '../config'

const API = axios.create({baseURL:config.API_ENDPOINT})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
// community
export const fetchCommunity = () => API.get('/community')

// cars
export const fetchCars = () => API.get('/cars')
export const createCars = (newCar) => API.post('/cars',newCar)
export const deleteCar = (id) => API.delete(`/cars/${id}`)

// violation
export const addViolation =  (id) => API.patch(`/cars/${id}/violation`)
export const resetViolation = (id) => API.patch(`/cars/${id}/resetviolation`)

// verify
export const verify = (id) => API.patch(`/cars/${id}/verify`)

// sticker
export const fetchSticker = () => API.get('/sticker')
export const sticker = (newSticker) => API.post(`/sticker`,newSticker)
export const deleteSticker = (id) => API.delete(`/sticker/${id}`)

// comments
export const fetchComments = () => API.get('/comments')
export const createComments = (newComment) => API.post('/comments',newComment)

// Auth
export const signIn = (formData) => API.post('/user/signin',formData)
export const signUp = (formData) => API.post('/user/signup',formData)

// Sticker
export const fetchImage = () => API.get('/image')
export const createImage = (newImage) => API.post('/image',newImage)