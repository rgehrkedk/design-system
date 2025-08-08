import { Button } from '../button.js';
import React from 'react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Outline = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Ghost = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Small = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Large = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

export const FullWidth = {
  args: {
    children: 'Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Disabled = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const AllVariants = {
  render: () => React.createElement('div', 
    { style: { display: 'flex', gap: '1rem', flexWrap: 'wrap' } },
    React.createElement(Button, { variant: 'primary' }, 'Primary'),
    React.createElement(Button, { variant: 'secondary' }, 'Secondary'),
    React.createElement(Button, { variant: 'outline' }, 'Outline'),
    React.createElement(Button, { variant: 'ghost' }, 'Ghost')
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllSizes = {
  render: () => React.createElement('div',
    { style: { display: 'flex', gap: '1rem', alignItems: 'center' } },
    React.createElement(Button, { size: 'small' }, 'Small'),
    React.createElement(Button, { size: 'medium' }, 'Medium'),
    React.createElement(Button, { size: 'large' }, 'Large')
  ),
  parameters: {
    layout: 'padded',
  },
};