import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <h1>
      <Link to="/signup">JOIN THE CLUB</Link>
      Hello #40!
    </h1>
  );
}
