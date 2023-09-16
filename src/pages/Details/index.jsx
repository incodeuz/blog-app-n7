import parse from "html-react-parser";
import EyeIcon from "../../assets/eye.svg";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import usePostsApi from "../../service/post";
import { Ping } from "@uiball/loaders";
import { Button } from "flowbite-react";
import { Popconfirm, message, Button as Btn } from "antd";
import useUsersApi from "../../service/users";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOnePostById, deletePost } = usePostsApi();
  const { followToUser } = useUsersApi();

  const [data, setData] = useState({});
  const [isFollowing, setIsFollowing] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getOnePostById(id).then((res) => setData(res.data));
  }, []);

  const confirm = () => {
    deletePost(id)
      .then((res) => {
        res.data && message.success("Task deleted successfully!");
        return navigate("/");
      })
      .catch((err) => message.error(err));
  };

  const follow = () => {
    setIsLoading(true);
    followToUser({ following_id: data?.user.id })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setIsFollowing(res.data.message);
          setIsLoading(false);
          message.success(`You're now following ${data?.user.full_name}`);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        message.error(err);
      });
  };

  console.log(data, isFollowing);
  if (!localStorage.getItem("token")) {
    return <Navigate to="sign-in" />;
  }
  return (
    <>
      {data.id ? (
        <div className="max-w-[800px] w-full mx-auto mt-[40px]">
          <div className="flex items-center justify-between mb-[22px]">
            <div>
              <h3 className="text-[22px] font-semibold">
                {data?.user.full_name}
              </h3>
              <p className="text-[18px] text-gray-600 font-semibold">
                {data?.user.username}
              </p>
            </div>

            {localStorage.getItem("my_id") === data?.user.id ? (
              <div className="flex items-center gap-[10px]">
                <Button
                  onClick={() => navigate(`/edit/${id}`)}
                  gradientDuoTone="tealToLime"
                  outline
                >
                  <p>Edit</p>
                </Button>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button gradientDuoTone="pinkToOrange" outline>
                    <p>Delete</p>
                  </Button>
                </Popconfirm>
              </div>
            ) : isFollowing === "Followed" ? (
              <Btn className="py-2 px-4 h-fit">Following</Btn>
            ) : (
              <Btn
                loading={isLoading}
                className="py-2 px-4 h-fit"
                onClick={() => follow()}
              >
                Follow
              </Btn>
            )}
          </div>

          <div className="flex items-center gap-[20px] mb-[30px]">
            <p className="text-gray-600 text-[15px]">
              {new Date(data?.createdAt).toLocaleString()}
            </p>
            <p className="text-gray-600 text-[15px] flex items-center gap-[5px]">
              <img className="w-[20px]" src={EyeIcon} alt="" />
              <span>{data?.views}</span>
            </p>
          </div>

          <h1 className="details-title text-[30px] font-bold mb-[9px]">
            {data?.title}
          </h1>
          <p>{parse(data?.body.trim())}</p>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center h-screen fixed top-0 left-0">
          <Ping className="mx-auto" size={155} speed={2} color="black" />
        </div>
      )}
    </>
  );
};

export default Details;
