import axios from 'axios'

const API = 'http://localhost:3001/api'
export const registerRequest= user => axios.post(`${API}/register`,user) 
export const registerAbogaRequest= abogado => axios.post(`${API}/abogadoregister`,abogado)     
export const loginRequest= user => axios.post(`${API}/login`,user)   
export const loginRequestAbogado= abogado => axios.post(`${API}/abogadologin`,abogado)  