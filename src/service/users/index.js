import api from "../axios";

const useUsersApi = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  const signUp = async (data) => api.post("/user/signup", data);
  const getAllUsers = async () => api.get("/user");
  return {
    signIn,
    signUp,
    getAllUsers,
  };
};

export default useUsersApi;
