import React from "react";

export default function Hero({ childeren, hero }) {
  return (
    <div>
      <heaer className={hero}>{childeren}</heaer>
    </div>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
