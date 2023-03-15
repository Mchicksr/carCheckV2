import axios from 'axios'
import config from '../config'
import React,{useState,useEffect} from 'react';

const API = axios.create({baseURL:config.API_ENDPOINT})
// export const API = axios.create({baseURL:'http://localhost:8000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
// community
export const fetchCommunity = () => API.get('/community')
export const createCommunity = (commData) => API.post('/community',commData)
export const createRules = (id,rules) => API.post(`/community/rules/${id}`,rules)

// cars
export const fetchCars = () => API.get('/cars')
export const createCars = (newCar) => API.post('/cars',newCar)
export const deleteCar = (id) => API.delete(`/cars/${id}`)
// export const getCar = (searchTerm) => axios.get(`http://localhost:8000/cars/find/${searchTerm}`)
export const getCar = (searchTerm) => API.get(`/cars/find/${searchTerm}`)

// violation NEW
// export const addViolation =  (id) => API.patch(`/cars/${id}/violation`)
export const addViolation =  (id,violation) => API.patch(`/cars/${id}/violation`,violation)
export const resetViolation = (id) => API.patch(`/cars/${id}/resetviolation`)
export const violationList = (id,violations) => API.patch(`/cars/violations/${id}`,violations)

// verify
export const verify = (id) => API.patch(`/cars/${id}/verify`)

// SafeList
//  There is an API in side of SafeBtn 
export const getSafeList = (id) => API.get(`cars/safe/${id}`)
// export const updateSafe = (id,safe) => API.patch(`cars/safe/${id}`,safe)
// export const updateSafe = (id,safe) => axios.patch(`http://localhost:8000/cars/safe/${id}`,safe)
export const updateSafe = (id,safe) => API.patch(`/cars/safe/${id}`,safe)


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

// violation Type OLD
export const fetchViolation = () => API.get('/violation')
export const createViolation = (newViolation) => API.post('/violation',newViolation)
export const deleteViolation = (id) => API.delete(`/violation/${id}`)
// export const fetchViolation = () => axios.get('http://localhost:8000/violation')
// export const createViolation = (newViolation) => axios.post('http://localhost:8000/violation',newViolation)
// export const deleteViolation = (id) => axios.delete(`http://localhost:8000/violation/${id}`)

