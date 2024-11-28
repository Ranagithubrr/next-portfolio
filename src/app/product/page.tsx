"use client";

import { useEffect, useState } from "react";
import { PostsType } from "./../../types/types";

const Page = () => {
  const [data, setData] = useState([]);
  const FetchData = async () => {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(api);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {data?.map((post: PostsType, index: number) => (
        <div key={index} className="border m-2 p-2 rounded">
          <h2>{post.id}</h2>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
