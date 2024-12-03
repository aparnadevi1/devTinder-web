import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, skills, photoUrl, age, gender, about } = user;
  console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl ">
      <figure>
        <img src={photoUrl} alt="Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + "," + gender}</p>}

        {about && <p>{about}</p>}
        <div className="flex justify-around">
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ignored</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
