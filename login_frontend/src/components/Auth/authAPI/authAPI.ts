import axios from 'axios';
import { SignupRequest } from '../../../types';

export const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const loginUser = async (loginData: SignupRequest) => {
  const { data } = await API({
    method: 'post',
    url: '/auth',
    data: loginData,
  });
  return data;
};
