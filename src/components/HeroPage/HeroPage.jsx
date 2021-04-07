import React from "react";

export default function HeroPage({ img, heroClass, title, subtitle }) {
  console.log(img, heroClass);
  return (
    <div className={heroClass}>
      <h1 className="text-upper text-center display-4">{title}</h1>
      <div>
        <h4 className="text-center align-middle">{subtitle}</h4>
      </div>
    </div>
  );
}
