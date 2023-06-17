import React from "react";

function Card(props) {
  return (
    <div className="movie">
      <h3>Title-{props.title}</h3>
      <br />
      <h5>
        SelfText_HTML-
        {props.selftext_html}
      </h5>
      <br />
      <p>
        URL-
        {props.url}
      </p>
      <br />
      <h3>Score-{props.score}</h3>
    </div>
  );
}
export default Card;
