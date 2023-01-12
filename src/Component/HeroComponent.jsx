import React from "react";
import { Container } from "react-bootstrap";

export default function HeroComponent() {
  return (
    <div className="parent-div" style={{ padding: "5rem" }}>
      <Container className="mx-auto text-center mt-5">
        <h6 className="fw-bold" style={{ color: "#a1a1a1" }}>
          MUST SEE TV SHOWS, NOW STREAMING
        </h6>
        <p className="mb-4 fs-5 w-50 mx-auto text-white fw-light">
          View thousand of shows and see details about your favorite tv shows
          and people
        </p>
        <a
          href="https://www.tvamaze.com"
          rel="noreferrer"
          className="fw-bold text-dark p-3 bg-white mt-4 rounded-4"
        >
          CLICK FOR MORE{" "}
        </a>
      </Container>
    </div>
  );
}
