import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(event) {
    event.preventDefault();
    console.log(name, email, password);
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
