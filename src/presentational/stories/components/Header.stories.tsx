import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from 'src/presentational/components/Header';

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

export const withOnClickBack = Template.bind({});
withOnClickBack.args = {
  caption: 'Caption',
  children: <>children</>,
  onClickBack: () => {
    //
  },
};

export const withOnClickBackLink = Template.bind({});
withOnClickBackLink.args = {
  caption: 'Caption',
  children: <>children</>,
  onClickBackLink: '/',
};
