import {render, screen} from 'test-utils';

import Date from './date';

test('Date component format date to the specific format', () => {
  render(<Date dateString="2020-01-01" />);

  expect(screen.getByTestId('datetime')).toHaveTextContent('January 1, 2020');
});
