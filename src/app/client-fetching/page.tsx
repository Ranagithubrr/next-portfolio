"use client";

import { PostsType } from "@/types/types";
import { useState, useEffect } from "react";

function Profile() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      {data?.map((post: PostsType, index: number) => (
        <div key={index}>
          <h2>{post.userId}</h2>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
