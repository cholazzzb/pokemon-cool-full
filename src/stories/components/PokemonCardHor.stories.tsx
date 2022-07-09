import PokemonCardHor from '@/components/PokemonCardHor';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/PokemonCardHor',
  component: PokemonCardHor,
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof PokemonCardHor>;

const Template: ComponentStory<typeof PokemonCardHor> = (args) => (
  <PokemonCardHor {...args} />
);

export const CicakCharmander = Template.bind({});
CicakCharmander.args = {
  name: 'charmander',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
};
