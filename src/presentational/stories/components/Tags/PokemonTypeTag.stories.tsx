import { ComponentMeta, ComponentStory } from '@storybook/react';

import PokemonTypeTag from '@/presentational/components/Tags/PokemonTypeTag';

export default {
  title: 'Components/Tags/PokemonTypeTag',
  component: PokemonTypeTag,
  argTypes: {
    focused: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PokemonTypeTag>;

const Template: ComponentStory<typeof PokemonTypeTag> = (args) => (
  <PokemonTypeTag {...args} />
);

export const NormalTag = Template.bind({});
NormalTag.args = {
  pokemonType: 'normal',
};

export const FireTag = Template.bind({});
FireTag.args = {
  pokemonType: 'fire',
};

export const FightingTag = Template.bind({});
FightingTag.args = {
  pokemonType: 'fighting',
};

export const WaterTag = Template.bind({});
WaterTag.args = {
  pokemonType: 'water',
};

export const FlyingTag = Template.bind({});
FlyingTag.args = {
  pokemonType: 'flying',
};

export const GrassTag = Template.bind({});
GrassTag.args = {
  pokemonType: 'grass',
};

export const PoisonTag = Template.bind({});
PoisonTag.args = {
  pokemonType: 'poison',
};

export const ElectricTag = Template.bind({});
ElectricTag.args = {
  pokemonType: 'electric',
};

export const GroundTag = Template.bind({});
GroundTag.args = {
  pokemonType: 'ground',
};

export const PsychicTag = Template.bind({});
PsychicTag.args = {
  pokemonType: 'psychic',
};

export const RockTag = Template.bind({});
RockTag.args = {
  pokemonType: 'rock',
};

export const IceTag = Template.bind({});
IceTag.args = {
  pokemonType: 'ice',
};

export const DragonTag = Template.bind({});
DragonTag.args = {
  pokemonType: 'dragon',
};

export const GhostTag = Template.bind({});
GhostTag.args = {
  pokemonType: 'ghost',
};

export const DarkTag = Template.bind({});
DarkTag.args = {
  pokemonType: 'dark',
};

export const SteelTag = Template.bind({});
SteelTag.args = {
  pokemonType: 'steel',
};

export const FairyTag = Template.bind({});
FairyTag.args = {
  pokemonType: 'fairy',
};
