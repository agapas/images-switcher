import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ToggleSwitch from "./components/ToggleSwitch";
import ImageChangeOnMouseOver from "./components/ImageChangeOnMouseOver";

// test('renders App content', () => {
//   const { getByText } = render(<App />);
//   const content = getByText(/some content/i);
//   expect(content).toBeInTheDocument();
// });

test('renders App content', () => {
    const comp = render(<App />);
    expect(comp.find(ToggleSwitch).exists()).toBe(true);
    expect(comp.find(ImageChangeOnMouseOver).exists()).toBe(true);
});
