import React from "react";
import { Link } from "react-router-dom";

export default function MediaCard({ id, name, genres, image }) {
  return (
    <Link to={`/tvshows/${id}`}>
      <div
        className="me-4 toor position-relative rounded-bottom-0 rounded-bottom" 
        style={{ width: "80vw", height: "350px" }}
      >
        <img
          src={image?.original}
          alt=""
          loading="lazy"
          className="w-100 h-100"
        />

        <div
          className="position-absolute bottom-0 bg-dark left-0 w-100 opacity-50 border-bottom-0 rounded-bottom"
          style={{ height: "96px", zIndex: "0" }}
        />
        <div className="d-flex position-absolute bottom-0 left-0 px-4 w-100 z-3 justify-content-center flex-column">
          <h1 className="fs-5 text-bold text-light">{name}</h1>
          <p className="text-light">{genres.join("   -   ")}</p>
        </div>
      </div>
    </Link>
  );
}
