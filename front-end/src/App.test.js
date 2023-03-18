import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app heading', async () => {
  render(<App />);
  const heading = await screen.findByText('Project Conversation History');
  expect(heading).toBeInTheDocument();
});
