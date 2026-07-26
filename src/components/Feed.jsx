import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed.length > 0) return;

    try {
      const result = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(result?.data?.data));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feed?.length <= 0)
    return <h1 className="flex justify-center my-10">No New Users Found</h1>;

  return (
    feed && (
      <div className="flex justify-center my-3">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
