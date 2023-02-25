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

export const createPokemonTypeColor = (opacity = 1) => ({
  normal: {
    backgroundColor: `rgba(154, 157, 161, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(154, 157, 161, ${opacity - 0.1})`,
    },
  },
  fire: {
    backgroundColor: `rgba(243, 107, 108, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(243, 107, 108, ${opacity - 0.1})`,
    },
  },
  fighting: {
    backgroundColor: `rgba(192, 53, 40, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(192, 53, 40, ${opacity - 0.1})`,
    },
  },
  water: {
    backgroundColor: `rgba(118, 188, 252, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(118, 188, 252, ${opacity - 0.1})`,
    },
  },
  flying: {
    backgroundColor: `rgba(168, 144, 240, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(168, 144, 240, ${opacity - 0.1})`,
    },
  },
  grass: {
    backgroundColor: `rgba(86, 208, 176, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(86, 208, 176, ${opacity - 0.1})`,
    },
  },
  poison: {
    backgroundColor: `rgba(181, 99, 206, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(181, 99, 206, ${opacity - 0.1})`,
    },
  },
  electric: {
    backgroundColor: `rgba(255, 215, 111, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(255, 215, 111, ${opacity - 0.1})`,
    },
  },
  ground: {
    backgroundColor: `rgba(215, 133, 85, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(215, 133, 85, ${opacity - 0.1})`,
    },
  },
  psychic: {
    backgroundColor: `rgba(241, 86, 135, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(241, 86, 135, ${opacity - 0.1})`,
    },
  },
  rock: {
    backgroundColor: `rgba(184, 160, 56, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(184, 160, 56, ${opacity - 0.1})`,
    },
  },
  ice: {
    backgroundColor: `rgba(152, 216, 216, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(152, 216, 216, ${opacity - 0.1})`,
    },
  },
  bug: {
    backgroundColor: `rgba(157, 193, 47, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(157, 193, 47, ${opacity - 0.1})`,
    },
  },
  dragon: {
    backgroundColor: `rgba(119, 107, 248, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(119, 107, 248, ${opacity - 0.1})`,
    },
  },
  ghost: {
    backgroundColor: `rgba(112, 88, 152, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(112, 88, 152, ${opacity - 0.1})`,
    },
  },
  dark: {
    backgroundColor: `rgba(95, 96, 109, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(95, 96, 109, ${opacity - 0.1})`,
    },
  },
  steel: {
    backgroundColor: `rgba(184, 184, 208, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(184, 184, 208, ${opacity - 0.1})`,
    },
  },
  fairy: {
    backgroundColor: `rgba(229, 199, 214, ${opacity})`,
    '&:hover': {
      backgroundColor: `rgba(229, 199, 214, ${opacity - 0.1})`,
    },
  },
});
