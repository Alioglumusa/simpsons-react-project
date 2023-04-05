import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  test("renders List component when '/' path is loaded", () => {
    render(<App />);
    const listElement = screen.getByTestId("list-component");
    expect(listElement).toBeInTheDocument();
  });

  test("renders CharacterDetail component when '/character/:id' path is loaded", () => {
    render(<App />, { route: "/character/1" });
    const detailElement = screen.getByTestId("detail-component");
    expect(detailElement).toBeInTheDocument();
  });

  test("renders AddCharacterPage component when '/characters/add' path is loaded", () => {
    render(<App />, { route: "/characters/add" });
    const addElement = screen.getByTestId("add-component");
    expect(addElement).toBeInTheDocument();
  });
});
