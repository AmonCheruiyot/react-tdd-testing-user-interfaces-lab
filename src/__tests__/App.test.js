import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

describe('App', () => {
  it('renders the title', () => {
    render(<App />);
    const title = screen.getByText('Hi, I\'m Amon Kiprotich');
    expect(title).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(<App />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('renders the about me heading', () => {
    render(<App />);
    const heading = screen.getByText('About Me');
    expect(heading).toBeInTheDocument();
  });

  it('renders the biography', () => {
    render(<App />);
    const biography = screen.getByText('Your biography');
    expect(biography).toBeInTheDocument();
  });

  it('renders the GitHub link', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'My GitHub page' });
    expect(link).toBeInTheDocument();
  });

  it('renders the LinkedIn link', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'My LinkedIn page' });
    expect(link).toBeInTheDocument();
  });
});