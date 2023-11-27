import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";

test('renders Navbar component', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

