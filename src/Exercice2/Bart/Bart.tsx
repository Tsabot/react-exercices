import React from "react";
import "./Bart.css";

interface Props {}

export const Bart: React.FunctionComponent<Props> = () => {
  return (
    <div className="Bart__Content">
      <img
        src="resources/Bart.png"
        alt="Bart Simpson"
        className="image"
      />
    </div>
  );
};
