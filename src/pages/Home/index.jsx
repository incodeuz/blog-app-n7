import React, { useEffect, useState } from "react";
import usePostsApi from "../../service/post";
import Card from "../../components/Card";
import { Ping } from "@uiball/loaders";
import { Select, Input } from "antd";
import useUsersApi from "../../service/users";

const Home = () => {
  const { getPosts } = usePostsApi();
  const { getAllUsers } = useUsersApi();
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState(data);
  const [users, setUsers] = useState([]);

  const searchData = (value) => {
    setTimeout(() => {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

      setDatas(filteredData);
    }, 500);
  };

  console.log(datas, data);

  useEffect(() => {
    getPosts().then((res) => setData(res.data));
    getAllUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <div className="flex items-center flex-col w-[full] max-w-[800px] mx-auto gap-[10px] mt-[40px]">
        <div className="flex items-center w-full gap-[15px]">
          <input
            type="text"
            className="w-full rounded-lg"
            placeholder="Search for title..."
            onKeyUp={(e) => searchData(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end w-full gap-[15px]">
          <input
            type="text"
            list="authors"
            className="w-[200px] rounded-lg"
            placeholder="Search for authors..."
          />
          <datalist id="authors">
            {users?.map((v) => (
              <option>{v?.username}</option>
            ))}
          </datalist>
        </div>
      </div>
      <div className="w-[full] max-w-[800px] mx-auto">
        {datas.length > 0 ? (
          datas?.map((post) => <Card {...post} />)
        ) : data.length > 0 ? (
          data?.map((post) => <Card {...post} />)
        ) : (
          <div className="w-full flex items-center justify-center h-screen fixed top-0 left-0">
            <Ping className="mx-auto" size={155} speed={2} color="black" />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
