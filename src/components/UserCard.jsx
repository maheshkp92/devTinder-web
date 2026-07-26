import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constatnts";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleSendReuqest = async (status, userId) => {
    try {
      const result = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };
  const { photoUrl, firstName, lastName, about, age, gender, skills, _id } =
    user;
  return (
    <div className="card bg-base-300 w-80 shadow-sm">
      <figure className="mx-auto my-4 w-44 h-44 overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={photoUrl}
          alt="user-profile-pic"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && <p>Age: {age}</p>}
        {gender && <p>Gender: {gender}</p>}
        {skills && <p>Skills: {skills}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary"
            onClick={() => handleSendReuqest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendReuqest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
