import React from "react";
import { mount } from "enzyme";
import ImagesContent from "components/ImagesContent";
import ImagesController from "components/ImagesController";
import ToggleSwitch from "components/ToggleSwitch";

describe("ImagesController", () => {
    const mockPaths = [["primary.jpg", "secondary.jpg"]];
    const getComp = () => mount(
        <ImagesController paths={mockPaths} />
    );

    it ("should render without crashing", () => {
        const comp = getComp();

        expect(comp.exists()).toBe(true);
        expect(comp.find(ToggleSwitch).length).toEqual(2);
        expect(comp.find(ImagesContent).length).toEqual(1);
    });

    it ("should render ToggleSwitch components", () => {
        const comp = getComp();

        const toggleSwitch = comp.find(ToggleSwitch);
        const allImagesToggle = toggleSwitch.at(0);
        const eventToggle = toggleSwitch.at(1);

        expect(allImagesToggle.key()).toEqual("1");
        expect(allImagesToggle.prop("checked")).toBe(false);
        expect(allImagesToggle.prop("className")).toEqual("switch-all-images");
        expect(allImagesToggle.prop("label")).toEqual("Switch all images");
        expect(allImagesToggle.prop("onChange")).toBeDefined();

        expect(eventToggle.key()).toEqual("2");
        expect(eventToggle.prop("checked")).toBe(false);
        expect(eventToggle.prop("className")).toEqual("switch-event");
        expect(eventToggle.prop("label")).toEqual("Switch mouse over event to scrolling");
        expect(eventToggle.prop("onChange")).toBeDefined();
    });

    it ("should render ImagesContent component", () => {
        const comp = getComp();

        const imageContent = comp.find(ImagesContent);
        expect(imageContent.prop("event")).toEqual("mouse over");
        expect(imageContent.prop("primaryByDefault")).toBe(true);
        expect(imageContent.prop("paths")).toEqual(mockPaths);
    });

    // TODO:
    // investigate how to properly test React Hooks and why the test below fails
    it ("should deal with changing checked prop of the first ToggleSwitch", () => {
        const comp = getComp();

        const toggleSwitch = comp.find(ToggleSwitch).first();
        expect(toggleSwitch.prop("checked")).toBe(false);

        toggleSwitch.invoke("onChange");
        // comp.update(); // it doesn't work

        expect(toggleSwitch.prop("checked")).toBe(true);
    });
});

