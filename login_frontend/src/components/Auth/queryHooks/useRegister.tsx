import { RegisterType } from '../../../types';
import { RegisterUser } from '../authAPI/authAPI';
// import ROUTES from '../../../routes';

const useRegister = () => {
  const handleRegisterSubmit = async (registerData: RegisterType) => {
    try {
      await RegisterUser(registerData);
    } catch (err) {
      console.log('회원가입 실패');
    }
  };
  return { handleRegisterSubmit };
};

export default useRegister;
