import React from "react";
import { shallow } from "enzyme";
import ImagesSource from "components/ImagesSource";

describe("ImagesSource", () => {
    const getComp = (url) => shallow(<ImagesSource source={url} />);

    it ("should render 'Source of images' with a given source as a link", () => {
        const url = "http://abc.com";
        const comp = getComp(url);
        expect(comp.exists()).toBe(true);
        expect(comp.text()).toContain("Source of images:");

        const linkElement = comp.find(`a[href='${url}']`);
        expect(linkElement.exists()).toBe(true);
        expect(linkElement.text()).toEqual(url);
    });
});
