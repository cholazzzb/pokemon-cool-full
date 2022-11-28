const primaryColors: Record<string, string> = {
  normal: '#a8a878',
  fire: '#f36b6c',
  fighting: '#c03528',
  water: '#76bcfc',
  flying: '#a890f0',
  grass: '#56d0b0',
  poison: '#a14ca0',
  electric: '#ffd76f',
  ground: '#e0c068',
  psychic: '#f15687',
  rock: '#b8a038',
  ice: '#98d8d8',
  bug: '#a8b82a',
  dragon: '#776bf8',
  ghost: '#705898',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#e5c7d6',
};

export const getPrimaryColorFromType = (type: string) => {
  return primaryColors[type];
};

const secondaryColors: Record<string, string> = {
  normal: '#a8a878',
  fire: '#f47a7b',
  fighting: '#c03528',
  water: '#87cafc',
  flying: '#a890f0',
  grass: '#59dbc0',
  poison: '#a14ca0',
  electric: '#fcd773',
  ground: '#e0c068',
  psychic: '#f15687',
  rock: '#b8a038',
  ice: '#98d8d8',
  bug: '#a8b82a',
  dragon: '#776bf8',
  ghost: '#705898',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#c2617f',
};

export const getSecondaryColorFromType = (type: string) => {
  return secondaryColors[type];
};
