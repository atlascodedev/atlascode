import { Story, Meta } from '@storybook/react';
import { NewsLetterInput, NewsLetterInputProps } from './NewsLetterInput';

export default {
  component: NewsLetterInput,
  title: 'AtlasCode/Inputs/News Letter Input',
} as Meta;

const Template: Story<NewsLetterInputProps> = (args) => (
  <NewsLetterInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'This is the placeholder',
  color: 'primary',
  helperText: '',
  inputDisabled: undefined,
  error: false,
  buttonLabel: 'Enviar',
  size: 'small' as 'small' | 'medium',
} as NewsLetterInputProps;
