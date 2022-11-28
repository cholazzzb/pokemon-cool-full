import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'src/presentational/components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headText: 'HeadText',
  bodyText: 'BodyText',
};
