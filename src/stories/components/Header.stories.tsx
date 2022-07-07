import Header from '@/components/Header';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const withCaption = Template.bind({});
withCaption.args = {
  caption: 'Caption',
};

export const withOnBack = Template.bind({});
withOnBack.args = {
  caption: 'Caption',
  children: <>children</>,
  onBack: () => {},
};
