import api from "../axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

const usePostsApi = () => {
  const createPost = async (data) => api.post("/blog", { ...data }, config);
  const getPosts = async () => api.get("/blog");

  return {
    createPost,
    getPosts,
  };
};

export default usePostsApi;
