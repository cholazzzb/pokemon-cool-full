import { ComponentMeta, ComponentStory } from '@storybook/react';
import PokeImage from 'src/presentational/components/PokeImage';

export default {
  title: 'Components/PokeImage',
  component: PokeImage,
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof PokeImage>;

const Template: ComponentStory<typeof PokeImage> = (args) => (
  <PokeImage {...args} />
);

export const Bulbasaur = Template.bind({});
Bulbasaur.args = {
  type: 'grass',
  size: 200,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
};

export const Charmander = Template.bind({});
Charmander.args = {
  type: 'fire',
  size: 200,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
};

export const Squirtle = Template.bind({});
Squirtle.args = {
  type: 'water',
  size: 200,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png',
};

export const Pikachu = Template.bind({});
Pikachu.args = {
  type: 'electric',
  size: 200,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
};
