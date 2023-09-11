import api from "../axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

const usePostsApi = () => {
  const createPost = async (data) => api.post("/blog", { ...data }, config);
  //   const signUp = async (data) => api.post("/user/signup", data);

  return {
    createPost,
  };
};

export default usePostsApi;
