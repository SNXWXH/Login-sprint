import { useQuery } from '@tanstack/react-query';
import { API } from '../components/Auth/authAPI/authAPI';

export const Main = () => {
  const getUserProfile = async () => {
    const res = await API({
      method: 'get',
      url: '/users/req-user',
    });

    console.log('🦄  res.data:', res.data);
    return res.data;
  };

  const { data, status, isLoading } = useQuery(['login-user'], getUserProfile);

  //   const { email } = data;

  //   const {
  //     data: { email },
  //     isLoading,
  //     status,
  //   } = useQuery(["login-user"], getUserProfile);
  console.log(status);

  return (
    <>
      {!isLoading ? (
        <>
          <div>Main</div>
          <div>{data.email}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
