import React from "react";
import SoundItem from "./Sound";
import SoundType from "../domain/sound";


interface Props {
  sounds: SoundType[];
}

export const Sounds: React.FunctionComponent<Props> = ({ sounds }) => {
  return (
    <ul>
      {sounds.map((sound) => (
        <SoundItem sound={sound} />
      ))}
    </ul>
  );
};
