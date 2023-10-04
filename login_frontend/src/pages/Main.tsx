import { useQuery } from "@tanstack/react-query";
import { API } from "../axios-create";

export const Main = () => {
  const getUserProfile = async () => {
    const res = await API({
      method: "get",
      url: "/users/req-user",
    });

    console.log("🦄  res:", res);
    return res.data;
  };

  const {
    data: { email },
    isLoading,
  } = useQuery(["login-user"], getUserProfile);

  return (
    <>
      {!isLoading ? (
        <>
          <div>Main</div>
          <div>{email}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
