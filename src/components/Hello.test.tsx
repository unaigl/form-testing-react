import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it("a", () => {
  render(<Hello />);
  const button = screen.getByRole("button", { name: /hello/i });
  expect(button).toBeInTheDocument();
});
