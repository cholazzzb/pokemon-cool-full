import PokemonCardVer from '@/components/PokemonCardVer';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/PokemonCardVer',
  component: PokemonCardVer,
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof PokemonCardVer>;

const Template: ComponentStory<typeof PokemonCardVer> = (args) => (
  <PokemonCardVer {...args} />
);

export const CicakCharmander = Template.bind({});
CicakCharmander.args = {
  id: 4,
  name: 'charmander',
};
