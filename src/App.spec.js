import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ImageChangeOnMouseOver from "./components/ImageChangeOnMouseOver";
import ToggleController from './components/toggle/ToggleController';

describe("App", () => {
    const comp = shallow(<App />);

    it("should render without crashing", () => {
        expect(comp.exists()).toBe(true);
        expect(comp.find(ToggleController).exists()).toBe(true);
        expect(comp.find(ImageChangeOnMouseOver).exists()).toBe(true);
    });
});
