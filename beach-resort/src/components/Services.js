import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktail",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, culpa.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hicking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, culpa.",
      },
      {
        icon: <FaShuttleVan />,
        title: "fFee Shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, culpa.",
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, culpa.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
