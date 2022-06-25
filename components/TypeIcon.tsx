/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { FC } from "react";
import {
  faBolt,
  faBomb,
  faBug,
  faCircle,
  faDiceD6,
  faDragon,
  faFeather,
  faFire,
  faFistRaised,
  faGhost,
  faHeart,
  faKiss,
  faLeaf,
  faMoon,
  faSkullCrossbones,
  faSnowflake,
  faTint,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ITypeIcon {
  type: string;
}

const TypeIcon: FC<ITypeIcon> = (props) => {
  const { type } = props;

  const icons: { [key: string]: any } = {
    normal: faCircle,
    fire: faFire,
    fighting: faFistRaised,
    water: faTint,
    flying: faFeather,
    grass: faLeaf,
    poison: faSkullCrossbones,
    electric: faBolt,
    ground: faUmbrellaBeach,
    psychic: faHeart,
    rock: faBomb,
    ice: faSnowflake,
    bug: faBug,
    dragon: faDragon,
    ghost: faGhost,
    dark: faMoon,
    steel: faDiceD6,
    fairy: faKiss,
  };

  return (
    <span
      css={css`
        display: flex;
        width: 10px;
        height: 10px;
        padding: 2px;
        justify-content: center;
        align-items: center;
      `}
    >
      <FontAwesomeIcon icon={icons[type]} />
    </span>
  );
};

export default TypeIcon;
