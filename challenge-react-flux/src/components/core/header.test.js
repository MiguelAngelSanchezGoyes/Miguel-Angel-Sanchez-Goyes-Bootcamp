import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./header";

test("renders learn react link", () => {
  // Arrange ;
  render(
    <Router>
      <Header />
    </Router>
  );

  // Act
  const titleElement = screen.getByText(/Tareas Dashboard/i);
  // Assert
  expect(titleElement).toBeInTheDocument();
});
