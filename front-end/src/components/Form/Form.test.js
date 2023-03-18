import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders the form', async () => {
  render(<Form />);
  const formLabel = await screen.findByText('Project Status');

  expect(formLabel).toBeInTheDocument();
});
