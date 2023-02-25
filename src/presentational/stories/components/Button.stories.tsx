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
  children: (
    <Text variant="h4" color="black">
      Button Default
    </Text>
  ),
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: 'primary',
  children: <Text variant="h4">Button Primary</Text>,
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  variant: 'secondary',
  children: (
    <Text variant="h4" color="black">
      Button Secondary
    </Text>
  ),
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  variant: 'danger',
  children: <Text variant="h4">Button Danger</Text>,
};
