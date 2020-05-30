import React from 'react';
import { shallow } from 'enzyme';
import ImagesSource from '../../components/ImagesSource';

describe("ImagesSource", () => {
    const getComp = (source) => shallow(<ImagesSource source={source} />);

    it ("should render 'Source of images' with a given source as a link", () => {
        const comp = getComp("abc");
        expect(comp.exists()).toBe(true);
        expect(comp.text()).toContain("Source of images:");

        const linkElement = comp.find("a[href='abc']");
        expect(linkElement.exists()).toBe(true);
        expect(linkElement.text()).toEqual("abc");
    });
});
