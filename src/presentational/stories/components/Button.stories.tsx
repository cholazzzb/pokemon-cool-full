import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@/presentational/components/Button';
import Text from '@/presentational/components/Text';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  children: <Text variant="h4">Button Default</Text>,
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  type: 'primary',
  children: <Text variant="h4">Button Primary</Text>,
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  type: 'secondary',
  children: <Text variant="h4">Button Secondary</Text>,
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  type: 'danger',
  children: <Text variant="h4">Button Danger</Text>,
};
