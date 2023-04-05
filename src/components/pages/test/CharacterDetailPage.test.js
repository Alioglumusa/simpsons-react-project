import { render, screen } from "@testing-library/react";
import CharacterDetailPage from "../CharacterDetailPage";
import { BrowserRouter } from "react-router-dom";

test("renders CharacterDetailPage component", () => {
  render(
    <BrowserRouter>
      <CharacterDetailPage />
    </BrowserRouter>
  );

  const goBackToList = screen.getByText(/Back to List/i);
  expect(goBackToList).toBeInTheDocument();
});
