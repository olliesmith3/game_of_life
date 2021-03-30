import React from 'react';
import { render, screen } from '@testing-library/react';
import { BoardSizeButtons } from '../../components/BoardSizeButtons';

test('renders the buttons', () => {
  render(<BoardSizeButtons handleFormSubmit={function(){}}/>);
  const form = screen.getByLabelText('Small');
  expect(form).toBeInTheDocument();
});
