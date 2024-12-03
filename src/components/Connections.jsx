import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connections) {
    return <h1>hgh</h1>;
  }
  if (connections.length === 0) {
    return <h1>Make some connections</h1>;
  }
  return (
    <div className="flex flex-col justify-center my-10 text">
      <h1 className="text-bold text-3xl flex justify-center">Connections</h1>

      {connections.map((connection) => {
        const { firstName, lastName, age, gender, skills, about, photoUrl } =
          connection;
        return (
          <div className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <img
              className="w-20 h-20 rounded-full"
              src={photoUrl}
              alt="photo"
            />

            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
