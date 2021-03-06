import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <links to="/" className="btn-primary">
          Return Home
        </links>
      </Banner>
    </Hero>
  );
};

export default Rooms;
