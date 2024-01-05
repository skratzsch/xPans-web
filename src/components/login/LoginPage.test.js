import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  test('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/Benutzername/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Passwort/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /xPans!/i })).toBeInTheDocument();
  });

  test('allows entering username and password', () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/Benutzername/i), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText(/Passwort/i), { target: { value: 'password' } });
    expect(screen.getByLabelText(/Benutzername/i).value).toBe('user');
    expect(screen.getByLabelText(/Passwort/i).value).toBe('password');
  });
});
