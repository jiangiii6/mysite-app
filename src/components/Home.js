import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="detail">
      <p id="hello"> Hello, I 'm</p> <p id="name"> XXXX </p>
      <p id="person-description"> UI Developer.UX Desinger.Problem Solver. </p>
      <a href="https://react.school" target="_blank">
        <button> Info </button>
      </a>
      <a href="https://react.school" target="_blank">
        <button> Portfolio </button>
      </a>
    </div>

  );
}

export default Home;
