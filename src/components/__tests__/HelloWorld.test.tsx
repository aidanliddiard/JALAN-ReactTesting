import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "../HelloWorld";

test("renders Hello, world!", () => {
  render(<HelloWorld />);
  const element = screen.getByText(/Hello, world!/i);
  expect(element).toBeInTheDocument();
});
