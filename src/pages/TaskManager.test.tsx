 /* eslint-disable testing-library/no-wait-for-side-effects  */
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TaskManager from './TaskManager';

// jest.setTimeout(10000);

test('renders TaskManager', async () => {
  render(<TaskManager />);

  
  const inputTask = screen.getByPlaceholderText('Add a task...');
  const addButton = screen.getByText('Add Task');
  fireEvent.change(inputTask, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  
  const taskElement = await screen.findByText('Test Task', { exact: false });
  expect(taskElement).toBeInTheDocument();

  
  const completeButton = screen.getByText('Complete');
  fireEvent.click(completeButton);

  
  const remainingButton = screen.getByText('Remaining');
  fireEvent.click(remainingButton);

  
  await waitFor(() => {
    const completedButton = screen.getByText('Completed');
    fireEvent.click(completedButton);
    expect(screen.getByText('Test Task', { exact: false })).toBeInTheDocument();
  });

  
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  
  const allButton = screen.getByText('All');
  fireEvent.click(allButton);

  
  await waitFor(() => {
    expect(screen.queryByText('Test Task')).toBeNull();
  });
});