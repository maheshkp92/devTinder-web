import React from "react";

const UserCard = ({ user }) => {
  const { photoUrl, firstName, lastName, about, age, gender, skills } = user;
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
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
