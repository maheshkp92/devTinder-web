import React from "react";

const RequestCard = ({ info }) => {
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
          <button className="btn btn-primary">Reject</button>
          <button className="btn btn-secondary">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
