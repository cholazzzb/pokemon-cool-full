const primaryColors: Record<string, string> = {
  normal: '#9a9da1',
  fire: '#f36b6c',
  fighting: '#c03528',
  water: '#76bcfc',
  flying: '#a890f0',
  grass: '#56d0b0',
  poison: '#b563ce',
  electric: '#ffd76f',
  ground: '#d78555',
  psychic: '#f15687',
  rock: '#b8a038',
  ice: '#98d8d8',
  bug: '#9dc12f',
  dragon: '#776bf8',
  ghost: '#705898',
  dark: '#5f606d',
  steel: '#b8b8d0',
  fairy: '#e5c7d6',
};

export const getPrimaryColorFromType = (type: string) => {
  return primaryColors[type];
};

const secondaryColors: Record<string, string> = {
  normal: '#a5a6aa',
  fire: '#f47a7b',
  fighting: '#dd5666',
  water: '#87cafc',
  flying: '#a6baea',
  grass: '#59dbc0',
  poison: '#b96ecd',
  electric: '#feeb02',
  ground: '#dc9066',
  psychic: '#f96994',
  rock: '#d3c597',
  ice: '#99cccd',
  bug: '#a7c648',
  dragon: '#307fcc',
  ghost: '#8782d8',
  dark: '#6f6f7b',
  steel: '#bfbfd5',
  fairy: '#c2617f',
};

export const getSecondaryColorFromType = (type: string) => {
  return secondaryColors[type];
};
