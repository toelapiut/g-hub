import axios from 'axios';
import t from 'typy';

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL,
  },
});


export const errorStyles = (error) => {
  if (!t(error).isNullOrUndefined) {
    return {
      borderColor: '#ED4337',
      color: '#ED4337'
    };
  }
  return {};
};