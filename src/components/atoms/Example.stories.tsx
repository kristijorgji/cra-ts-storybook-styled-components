import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { atomStory } from '../utils';
import { Example, ExampleProps } from './Example';
import StoryWrapper from '../../../.storybook/StoryWrapper';

export default {
    title: atomStory(Example.name),
    component: Example,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ExampleProps> = (args) => (
    <StoryWrapper>
        <Example {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
    name: 'Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: 'another test',
};
