import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(event) {
    event.preventDefault();
    console.log(name, email, password);

    const API_URL = "https://codaisseur-coders-network.herokuapp.com";
    const response = await axios.post(`${API_URL}/signup`, {
      name: name,
      email: email,
      password: password,
    });

    const action = {
      type: "SIGNUP_SUCCESS",
      payload: response.data.jwt,
    };

    dispatch(action);

    const profileResponse = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${response.data.jwt}`,
      },
    });

    const profileAction = {
      type: "PROFILE_FETCHED",
      payload: profileResponse.data,
    };

    dispatch(profileAction);
  }

  return (
    <div>
      Sign up
      <form onSubmit={handleSignUp}>
        <label>Name</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <label>Email</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
