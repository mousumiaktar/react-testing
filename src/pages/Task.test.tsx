import { render, fireEvent, screen } from '@testing-library/react';
import Task from './Task';

test('renders task', () => {
  const onCompleteMock = jest.fn();
  const onDeleteMock = jest.fn(); 
  render(
  <Task task="Test Task" completed={false} onComplete={onCompleteMock} onDelete={onDeleteMock} />);
  const taskElement = screen.getByText('Test Task');
  expect(taskElement).toBeInTheDocument();

  const completeButton = screen.getByText('Complete');
  fireEvent.click(completeButton);

  const deleteButton = screen.getByText('Delete'); 
  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);
  expect(onDeleteMock).toHaveBeenCalledTimes(1);
});