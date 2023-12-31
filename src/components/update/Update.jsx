import { useState } from "react";
import Warning from "../warning/Warning";
import "./update.css";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(name, email);
    // without API
    // dispatch(update({ name, email }));
    // with API
    // dispatch(updateUser2({ name, email }));
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder="Kevin"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder="Kevin@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput"
                type="password"
                placeholder="********"
              />
            </div>
            <button onClick={handleClick} className="updateButton"> Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
