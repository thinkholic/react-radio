import React from 'react'
import { storiesOf, action } from '@kadira/storybook';
import RadioGroup from '../index';

const colors = [
  {
    value: 'red',
    label: 'Red color',
    style: {
      color: 'red'
    }
  },
  'blue',
  'orange'
];

const COLOR = 'blue';

storiesOf('RadioGroup', module)
  .add('uncontrolled', () => (
    <RadioGroup
      name="colors"
      defaultValue={'red'}
      items={colors}
      onChange={action('on-change')}
    />
  ))
  .add('controlled', () => (
    <RadioGroup name="colors" value={COLOR} items={colors} onChange={action('on-change')} />
  ));
