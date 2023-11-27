import React from "react";
import { render, screen } from "@testing-library/react";
import { TodosProvider } from "../store/Todos";
import { MemoryRouter } from "react-router-dom";
import AllToDos from "./AllToDos";

test("renders AllToDos component", () => {
  render(
    <MemoryRouter>
      <TodosProvider>
        <AllToDos />
      </TodosProvider>
    </MemoryRouter>
  );
  expect(screen.getByRole('list')).toBeInTheDocument();
});
