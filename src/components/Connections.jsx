import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.connection);
  const connections = Array.isArray(connection) ? connection : [];

  const fetchConnection = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(response?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (connections.length === 0)
    return <h1 className="font-bold text-xl">No Connection Found!!</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-xl">Connections</h1>
      <div className="flex justify-evenly">
        {connections.map((item, index) => (
          <ConnectionCard key={item?._id || index} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Connections;
