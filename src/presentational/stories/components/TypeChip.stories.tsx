import { ComponentMeta, ComponentStory } from '@storybook/react';
import TypeChip from 'src/presentational/components/TypeChip';

export default {
  title: 'Components/TypeChip',
  component: TypeChip,
  argTypes: {},
} as ComponentMeta<typeof TypeChip>;

const Template: ComponentStory<typeof TypeChip> = (args) => (
  <TypeChip {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  type: 'normal',
};

export const Fire = Template.bind({});
Fire.args = {
  type: 'fire',
};

export const Fighting = Template.bind({});
Fighting.args = {
  type: 'fighting',
};

export const Water = Template.bind({});
Water.args = {
  type: 'water',
};

export const Flying = Template.bind({});
Flying.args = {
  type: 'flying',
};

export const Grass = Template.bind({});
Grass.args = {
  type: 'grass',
};

export const Poison = Template.bind({});
Poison.args = {
  type: 'poison',
};

export const Electric = Template.bind({});
Electric.args = {
  type: 'electric',
};

export const Ground = Template.bind({});
Ground.args = {
  type: 'ground',
};

export const Psychic = Template.bind({});
Psychic.args = {
  type: 'psychic',
};

export const Rock = Template.bind({});
Rock.args = {
  type: 'rock',
};

export const Ice = Template.bind({});
Ice.args = {
  type: 'ice',
};

export const Bug = Template.bind({});
Bug.args = {
  type: 'bug',
};

export const Dragon = Template.bind({});
Dragon.args = {
  type: 'dragon',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark',
};

export const Steel = Template.bind({});
Steel.args = {
  type: 'steel',
};

export const Fairy = Template.bind({});
Fairy.args = {
  type: 'fairy',
};
