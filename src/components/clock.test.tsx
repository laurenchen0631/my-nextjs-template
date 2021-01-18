import {screen} from '@testing-library/react';
import dayjs from 'dayjs';
import {render} from 'test-utils';

import Clock from './clock';

test('Clock shows the time with format hh:mm:ss', () => {
  const lastUpdate = 1610956687714;

  render(<Clock />, {initialState: {clock: {lastUpdate, light: false}}});
  expect(screen.getByTestId('time')).toHaveTextContent(dayjs(lastUpdate).format('HH:mm:ss'));
});
