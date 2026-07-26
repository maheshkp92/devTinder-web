import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import RequestCard from "./RequestCard";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const result = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(result.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (requests.length === 0)
    return (
      <h1 className="flex justify-center my-10 font-bold text-xl">
        No Requests Found!!
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-xl">Requests</h1>
      <div className="flex justify-evenly flex-wrap">
        {requests.map((item, index) => (
          <RequestCard
            key={item?._id || index}
            info={item?.fromUserId}
            requestId={item?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Requests;
