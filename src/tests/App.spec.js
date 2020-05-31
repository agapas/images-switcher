import React from "react";
import { shallow } from "enzyme";
import App, { paths, imagesSource as source } from "../App";
import ImagesController from "components/ImagesController";
import ImagesSource from "components/ImagesSource";

describe("App", () => {
    const comp = shallow(<App />);

    it("should render without crashing", () => {
        expect(comp.exists()).toBe(true);

        const imagesController = comp.find(ImagesController);
        expect(imagesController.exists()).toBe(true);
        expect(imagesController.props("paths")).toEqual({ paths });

        const imagesSource = comp.find(ImagesSource);
        expect(imagesSource.exists()).toBe(true);
        expect(imagesSource.props("source")).toEqual({ source });
    });
});
