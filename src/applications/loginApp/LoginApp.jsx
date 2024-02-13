import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";

const cred = {
  username: "geek",
  password: "1234",
};
const LoginApp = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.username === cred.username &&
      userInfo.password === cred.password
    ) {
      const user = {
        name: userInfo.username,
        lastLoginTime: new Date(),
        isAuthenticated: true,
      };

      dispatch(login(user));
    } else {
      alert("Try again");
      setUserInfo({ username: "", password: "" });
    }
  };

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="username"
          value={userInfo.username}
          onChange={onChangeHandler}
        />
        <input
          name="password"
          placeholder="password"
          value={userInfo.password}
          type="password"
          onChange={onChangeHandler}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginApp;
