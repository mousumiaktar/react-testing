import { render, fireEvent, screen } from '@testing-library/react';
import TaskList from './TaskList';

test('renders tasklist', async () => {
  const tasks = [
    { task: 'Test Task', completed: false },
  ];
  const onCompleteMock = jest.fn();
  render(
  <TaskList tasks={tasks} onComplete={onCompleteMock} />);

  const taskElement = screen.getByText('Test Task');
  expect(taskElement).toBeInTheDocument();

  const completeButton = screen.getByText('Complete');
  fireEvent.click(completeButton);

  const updatedTaskElement = screen.getByText('Test Task');
  expect(updatedTaskElement).toBeInTheDocument();
  expect(onCompleteMock).toHaveBeenCalledTimes(1);
});