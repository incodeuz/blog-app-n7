import api from "../axios";

const useUsersApi = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  const signUp = async (data) => api.post("/user/signup", data);
  const getAllUsers = async () => api.get("/user");
  const getOneUserById = async (id) => api.get(`/user/${id}`);
  return {
    signIn,
    signUp,
    getAllUsers,
    getOneUserById,
  };
};

export default useUsersApi;
