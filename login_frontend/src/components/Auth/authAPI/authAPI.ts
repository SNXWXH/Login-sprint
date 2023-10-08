import axios from 'axios';
import { RegisterType, LoginType } from '../../../types';

export const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const loginUser = async (loginData: LoginType) => {
  const { data } = await API({
    method: 'post',
    url: '/auth',
    data: loginData,
  });
  return data;
};

export const RegisterUser = async (registerData: RegisterType) => {
  const { data } = await API({
    method: 'post',
    url: '/users',
    data: registerData,
  });
  return data;
};
