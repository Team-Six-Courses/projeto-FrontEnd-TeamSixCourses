import axios from "axios";

export const api = axios.create({
  baseURL: 'https://teamsixfilms.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'appication/json'
  }
}) 

