import React, { useEffect, useState } from "react";
import "./userprogress.css";
import ProgressBar from "../progressLineChart/ProgressBar";

const UserProgress = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("http://localhost:3500/members");
      console.log(res);
      const data = await res.json();
      console.log(data);
      setUser(data);
    }
    fetchUser();
  }, []);

  return (
    <div className="progress">
      <h5> Progress</h5>
      <div className="progressbar">
        {user.map((data, i) => (
          <div className="userProgress">
            <img src={data.profile} alt="profile" />
            <ProgressBar
              bgcolor="rgb(60 129 187)"
              progress={data.progress}
              height={10}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProgress;
