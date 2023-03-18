import { render, screen } from '@testing-library/react';
import MessageList from './MessageList';

const mockMessages = [
  { "id": 1, "message_body": "Hey team!", "created_at": "2023-03-07T18:01:32.561Z" },
  { "id": 2, "message_body": "Hey!", "created_at": "2023-03-08T10:58:45.261Z" },
  { "id": 3, "message_body": "Project Status Changed to: In Progress", "created_at": "2023-03-08T10:58:51.563Z" }
];

test('renders the list of messages', async () => {
  render(<MessageList messages={mockMessages} />);
  const firstMessage = await screen.findByText('Hey team!');
  const secondMessage = await screen.findByText('Hey!');
  const thirdMessage = await screen.findByText('Project Status Changed to: In Progress');

  expect(firstMessage).toBeInTheDocument();
  expect(secondMessage).toBeInTheDocument();
  expect(thirdMessage).toBeInTheDocument();
});
