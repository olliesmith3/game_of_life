import React from 'react';
import { render, screen } from '@testing-library/react';
import { BoardSizeButtons } from '../../components/BoardSizeButtons';

test('renders the buttons', () => {
  render(<BoardSizeButtons getInitialValues={function(){}} setBoardSize={function(){}}/>);
  const smallButton = screen.getByLabelText('Small');
  expect(smallButton).toBeInTheDocument();
});
