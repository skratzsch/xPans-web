import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo'; // Adjust the import path as needed

describe('Logo Component', () => {
  it('renders the logo', () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText(/logo/i); // Assumes alt text contains 'logo'
    expect(logoImage).toBeInTheDocument();
  });
});
