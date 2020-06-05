import React from "react";

export default function Signup() {
  return (
    <div>
      Sign up
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
      </form>
    </div>
  );
}
