import React from "react";

function Card({ id, name, username, email }) {
  return (
    <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}2002x200`} alt="robots"></img>
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
