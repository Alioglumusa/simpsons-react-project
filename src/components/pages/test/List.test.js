import React from "react";
import { render, screen } from "@testing-library/react";
import List from "../List";

test("renders list page component", () => {
  render(<List />);
  const searchInput = screen.getByPlaceholderText("Search");
  const aToZButton = screen.getByText("A-Z");
  const zToAButton = screen.getByText("Z-A");
  const refreshDataButton = screen.getByText("Refresh Data🔃");
  expect(searchInput).toBeInTheDocument();
  expect(aToZButton).toBeInTheDocument();
  expect(zToAButton).toBeInTheDocument();
  expect(refreshDataButton).toBeInTheDocument();
});
