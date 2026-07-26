import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constatnts";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice";

const RequestCard = ({ info, requestId }) => {
  const dispatch = useDispatch();
  const reviewReuqest = async (status) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        { withCredentials: true },
      );
      dispatch(removeRequest(requestId));
    } catch (err) {
      console.error(err);
    }
  };
  const { photoUrl, firstName, lastName, about, age, gender, skills } = info;
  return (
    <div className="card card-side bg-base-200 shadow-lg my-10 m-2">
      <figure className="w-50 h-50 overflow-hidden rounded-lg">
        <img
          src={photoUrl}
          alt="connection-profile"
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p className="text-left w-full">{about}</p>
        <p className="text-left w-full">
          {[
            age ? `${age}` : null,
            gender ? `${gender}` : null,
            skills?.length ? `${skills.join(", ")}` : null,
          ]
            .filter(Boolean)
            .join(" | ")}
        </p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary"
            onClick={() => reviewReuqest("rejected")}
          >
            Reject
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => reviewReuqest("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
