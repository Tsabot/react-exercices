import React from "react";
import SoundType from "../../domain/sound"


interface Props {
  sound: SoundType;
}

export const Sound: React.FunctionComponent<Props> = ({ sound: { species, sound}  }) => {
  return (
    <li
        key={species}
        className="standard-margin"
    >{`The ${species} goes "${sound}"!`}</li>
  );
};
