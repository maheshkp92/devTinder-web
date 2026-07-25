import React from "react";

const UserCard = ({ user }) => {
  const { photoUrl, firstName, lastName, about, age, gender } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img className="h-50" src={photoUrl} alt="user-profile-pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && <p>Age: {age}</p>}
        {gender && <p>Gender: {gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
