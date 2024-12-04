import React from "react";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/FeedSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const UserCard = ({ user }) => {
  const { _id, firstName, lastName, skills, photoUrl, age, gender, about } =
    user;
  console.log(user);
  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };
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
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignored
            </button>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
