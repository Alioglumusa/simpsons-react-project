import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeadersSweetHome from '../HeaderSweetHome';

test('renders HeadersGoBack component', () => {
  render(
    <BrowserRouter>
      <HeadersSweetHome />
    </BrowserRouter>
  );

  // Check if "Sweet Home" text is rendered
  const SweetHome = screen.getByText(/Sweet Home/i);
  expect(SweetHome).toBeInTheDocument();

  // Check if logo image is rendered with correct alt text
  const logoImage = screen.getByAltText(/logo/i);
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png');

  // Check if "Add" button is rendered with correct text
  const addButton = screen.getByRole('button', { name: /add/i });
  expect(addButton).toBeInTheDocument();
  expect(addButton).toHaveTextContent(/add/i);
});