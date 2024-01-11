import React from 'react'
import axios from "axios"
const AxiosInstnace = axios.create({
    baseURL:"http://localhost:3302",
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true,
    timeout:5000
})
export default AxiosInstnace