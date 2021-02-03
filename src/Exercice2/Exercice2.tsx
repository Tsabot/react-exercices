import React from "react";
import Layout from "../_lib/Layout";
import Bart from "./Bart";
import Albatros from "./Albatros";
import Interview from "./Interview";
import BorderStyling from "./utils/BorderStyling";


interface Props {}

export const Exercice2: React.FunctionComponent<Props> = () => {
  return (
    <Layout title='Exercice 2: composition using the render props pattern (special "children" props)'>
      <ul>
        <li className="standard-margin">
          <BorderStyling classSuffix={"Bart__Framing"}>
            <Bart />
          </BorderStyling>
        </li>
        <li className="standard-margin">
          <BorderStyling classSuffix={"Albatros__Framing"}>
            <Albatros />
          </BorderStyling>
        </li>
        <li className="standard-margin">
          <BorderStyling classSuffix={"Interview__Framing"}>
            <Interview />
          </BorderStyling>
        </li>
      </ul>
    </Layout>
  );
};
