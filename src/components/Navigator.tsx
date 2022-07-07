/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import Image from 'next/image';
import { FC } from 'react';
import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import { LISTPAGE, OWNEDPAGE } from '@/constants/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import Badge from './Badge';

const NavigatorContainerStyle = css`
  z-index: 0;
  display: flex;
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 65px;
  justify-content: center;
  background-color: #f2f3f5;
`;

const IconContainerStyle = css`
  display: flex;
  background-color: gray;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
`;

const IconStyle = css`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

interface INavigatorProps {
  currentPage: string;
  goToListPage: () => void;
  goToOwnedPage: () => void;
}

const Navigator: FC<INavigatorProps> = (props) => {
  const { currentPage, goToListPage, goToOwnedPage } = props;

  const { ownedPokemons } = useOwnedPokemonStore();

  const ButtonContainerStyle = (page: string) => {
    let color, bgColor;
    if (currentPage === page) {
      color = 'black';
      bgColor = 'white';
    } else {
      color = 'white';
      bgColor = 'gray';
    }

    const style = css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      margin: 3px;
      color: ${color};
      font-size: 15px;
      border-radius: 10px;
      background-color: ${bgColor};
      &:hover {
        background-color: #d9dadc;
      }
    `;

    return style;
  };

  return (
    <div css={NavigatorContainerStyle}>
      <div css={IconContainerStyle}>
        <div css={ButtonContainerStyle(LISTPAGE)} onClick={goToListPage}>
          <span css={IconStyle}>
            <FontAwesomeIcon icon={faBook} />
          </span>
          Pokemon List
        </div>
        {/* <Search /> */}
        <div css={ButtonContainerStyle(OWNEDPAGE)} onClick={goToOwnedPage}>
          <span css={IconStyle}>
            <Image
              alt="pokeball"
              src={
                currentPage === OWNEDPAGE
                  ? '/pokeballSelected.svg'
                  : '/pokeball.png'
              }
              width={20}
              height={20}
            />
          </span>
          Owned
          <Badge>
            {Object.values(ownedPokemons).reduce(
              (acc, pokemons) => acc + pokemons.total,
              0,
            )}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
