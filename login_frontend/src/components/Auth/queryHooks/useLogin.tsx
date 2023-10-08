import { useNavigate } from 'react-router-dom';
import { LoginType } from '../../../types';
import { loginUser } from '../authAPI/authAPI';
// import ROUTES from '../../../routes';

const useLogin = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = async (loginData: LoginType) => {
    try {
      await loginUser(loginData);

      navigate('/');
    } catch (err) {
      console.log('로그인 실패');
    }
  };
  return { handleLoginSubmit };
};

export default useLogin;
