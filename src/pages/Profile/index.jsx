import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUsersApi from "../../service/users";
import { Ping } from "@uiball/loaders";
import Card from "../../components/Card";

const Profile = () => {
  const { id } = useParams();
  const { getOneUserById } = useUsersApi();
  const [data, setData] = useState({});

  useEffect(() => {
    getOneUserById(id).then((res) => setData(res.data));
  }, [id]);
  console.log(data);

  return (
    <>
      {data.id ? (
        <div className="flex gap-[40px] w-full mt-[40px] relative">
          <div className="w-full max-w-[400px] mt-[30px] fixed">
            <div className="relative">
              <div className="h-[180px]">
                <img
                  className="rounded-lg"
                  src="https://source.unsplash.com/1600x700/?nature,water"
                  alt=""
                />
              </div>
              <div className="mx-[20px] bg-[rgba(255,255,255,0.7)] shadow-md p-2 backdrop-blur-[3px] rounded-[20px] absolute bottom-[-40px] w-[calc(100%-40px)]">
                <h1 className="text-[25px] font-semibold text-center">
                  {data?.full_name}
                </h1>
                <h2 className="text-center text-[20px] font-semibold text-gray-500">
                  {data?.username}
                </h2>
              </div>
            </div>

            <div className="mt-[60px] px-8 flex items-center justify-between">
              <div className="flex items-center px-2 py-1 rounded-md">
                <p>
                  <span className="font-bold">{data?.blog.length}</span> posts
                </p>
              </div>
              <div className="flex items-center px-2 py-1 cursor-pointer rounded-md hover:bg-[rgba(0,0,0,0.1)]">
                <p>
                  <span className="font-bold">{data?.followers.length}</span>{" "}
                  followers
                </p>
              </div>
              <div className="flex items-center px-2 py-1 cursor-pointer rounded-md hover:bg-[rgba(0,0,0,0.1)]">
                <p>
                  <span className="font-bold">{data?.followings.length}</span>{" "}
                  followings
                </p>
              </div>
            </div>
          </div>

          <div className="ml-[450px] w-full">
            {data?.blog.map((post, index) => (
              <Card
                key={index}
                {...post}
                postID={post.id}
                user={{ id, username: data?.usename }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center h-screen fixed top-0 left-0">
          <Ping className="mx-auto" size={155} speed={2} color="black" />
        </div>
      )}
    </>
  );
};

export default Profile;
