import React, { useEffect, useState } from "react";
import usePostsApi from "../../service/post";
import Card from "../../components/Card";
import { Ping } from "@uiball/loaders";
import { Select, Input } from "antd";
import useUsersApi from "../../service/users";
import ContentLoader from "react-content-loader";

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

  const searchData2 = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const filteredData = data.filter((item) =>
        item.user.username
          .toLowerCase()
          .includes(e.target.children[0].value.toLowerCase())
      );

      setDatas(filteredData);
    }, 500);
  };

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
        <form
          onSubmit={(e) => searchData2(e)}
          className="flex items-center justify-end w-full gap-[15px]"
        >
          <input
            type="text"
            list="authors"
            className="w-[250px] rounded-lg"
            placeholder="Search for authors..."
            // onChange={(e) => searchData2(e.target.value)}
          />
          <datalist id="authors">
            {users?.map((v) => (
              <option>{v?.username}</option>
            ))}
          </datalist>
        </form>
      </div>
      <div className="w-[full] max-w-[800px] mx-auto">
        {datas.length > 0 ? (
          datas?.map((post, index) => <Card key={index} {...post} />)
        ) : data.length > 0 ? (
          data?.map((post, index) => <Card key={index} {...post} />)
        ) : (
          <div className="w-full flex items-center justify-center h-screen fixed top-0 left-0">
            <Ping className="mx-auto" size={155} speed={2} color="black" />
          </div>
          // <ContentLoader
          //   speed={2}
          //   width={400}
          //   height={150}
          //   viewBox="0 0 400 150"
          //   backgroundColor="#f3f3f3"
          //   foregroundColor="#ecebeb"
          // >
          //   <rect x="5" y="8" rx="3" ry="3" width="88" height="6" />
          //   <rect x="7" y="32" rx="3" ry="3" width="52" height="6" />
          //   <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
          //   <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
          //   <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          //   <rect x="85" y="30" rx="3" ry="3" width="52" height="6" />
          //   <rect x="1" y="103" rx="3" ry="3" width="380" height="6" />
          // </ContentLoader>
        )}
      </div>
    </>
  );
};

export default Home;
