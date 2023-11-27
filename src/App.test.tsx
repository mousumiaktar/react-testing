import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { TodosProvider } from "./store/Todos";


test("renders App component", () => {
  render(
    <MemoryRouter>
      <TodosProvider> 
        <App />
      </TodosProvider>
    </MemoryRouter>
    
  );
  expect(screen.getByText("List Your Daily Task")).toBeInTheDocument();
});


