import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodosProvider } from '../store/Todos';
import AddToDo from './Addtodo';

describe("render addtodo component", () =>{
    test('renders form', () => {
        render(
          <TodosProvider>
            <AddToDo />
          </TodosProvider>
        );
      
        const inputElement = screen.getByRole('textbox');
        const addButton = screen.getByRole('button', { name: "Add" });
      
        expect(inputElement).toBeInTheDocument();
        expect(addButton).toBeInTheDocument();
      });
})