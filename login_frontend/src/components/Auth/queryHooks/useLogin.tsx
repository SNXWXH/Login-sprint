import { useNavigate } from 'react-router-dom';
import { SignupRequest } from '../../../types';
import { loginUser } from '../authAPI/authAPI';

const useLogin = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = async (loginData: SignupRequest) => {
    const res = await loginUser(loginData);

    navigate('/');
    return res.data;
  };
};

export default useLogin;
