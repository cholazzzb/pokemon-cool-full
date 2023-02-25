import PokemonTag from '@/presentational/components/Tags/PokemonTag';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/PokemonTag',
  component: PokemonTag,
  argTypes: {
    focused: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PokemonTag>;

const Template: ComponentStory<typeof PokemonTag> = (args) => (
  <PokemonTag {...args} />
);

export const NormalTag = Template.bind({});
NormalTag.args = {
  pokemonType: 'normal',
  onClose: undefined,
};

export const FireTag = Template.bind({});
FireTag.args = {
  pokemonType: 'fire',
  onClose: undefined,
};

export const FightingTag = Template.bind({});
FightingTag.args = {
  pokemonType: 'fighting',
  onClose: undefined,
};

export const WaterTag = Template.bind({});
WaterTag.args = {
  pokemonType: 'water',
  onClose: undefined,
};

export const FlyingTag = Template.bind({});
FlyingTag.args = {
  pokemonType: 'flying',
  onClose: undefined,
};

export const GrassTag = Template.bind({});
GrassTag.args = {
  pokemonType: 'grass',
  onClose: undefined,
};

export const PoisonTag = Template.bind({});
PoisonTag.args = {
  pokemonType: 'poison',
  onClose: undefined,
};

export const ElectricTag = Template.bind({});
ElectricTag.args = {
  pokemonType: 'electric',
  onClose: undefined,
};

export const GroundTag = Template.bind({});
GroundTag.args = {
  pokemonType: 'ground',
  onClose: undefined,
};

export const PsychicTag = Template.bind({});
PsychicTag.args = {
  pokemonType: 'psychic',
  onClose: undefined,
};

export const RockTag = Template.bind({});
RockTag.args = {
  pokemonType: 'rock',
  onClose: undefined,
};

export const IceTag = Template.bind({});
IceTag.args = {
  pokemonType: 'ice',
  onClose: undefined,
};

export const DragonTag = Template.bind({});
DragonTag.args = {
  pokemonType: 'dragon',
  onClose: undefined,
};

export const GhostTag = Template.bind({});
GhostTag.args = {
  pokemonType: 'ghost',
  onClose: undefined,
};

export const DarkTag = Template.bind({});
DarkTag.args = {
  pokemonType: 'dark',
  onClose: undefined,
};

export const SteelTag = Template.bind({});
SteelTag.args = {
  pokemonType: 'steel',
  onClose: undefined,
};

export const FairyTag = Template.bind({});
FairyTag.args = {
  pokemonType: 'fairy',
  onClose: undefined,
};

export const WithOnClose = Template.bind({});
WithOnClose.args = {
  pokemonType: 'grass',
};
