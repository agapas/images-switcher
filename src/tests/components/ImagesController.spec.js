import React from "react";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";
import ImagesContent from "components/ImagesContent";
import ImagesController from "components/ImagesController";
import ToggleSwitch from "components/ToggleSwitch";

describe("ImagesController", () => {
    const mockPaths = [["primary.jpg", "secondary.jpg"]];
    const getComp = () => shallow(
        <ImagesController paths={mockPaths} />
    );
    const getMountedComp = () => mount(
        <ImagesController paths={mockPaths} />
    );

    it ("should render without crashing", () => {
        const comp = getComp();
        expect(comp.exists()).toBe(true);
        expect(comp.find(ToggleSwitch).length).toEqual(2);
        expect(comp.find(ImagesContent).length).toEqual(1);
    });

    it ("should render ToggleSwitch for switching all images as the first toggle", () => {
        const comp = getComp();
        const toggleSwitch = comp.find(ToggleSwitch);
        const allImagesToggle = toggleSwitch.first();

        expect(allImagesToggle.key()).toEqual("all-images");
        expect(allImagesToggle.prop("checked")).toBe(false);
        expect(allImagesToggle.prop("className")).toEqual("switch-all-images");
        expect(allImagesToggle.prop("label")).toEqual("Switch all images");
        expect(allImagesToggle.prop("onChange")).toBeDefined();
    });

    it ("should render ToggleSwitch for switching event as the second toggle", () => {
        const comp = getComp();
        const toggleSwitch = comp.find(ToggleSwitch);
        const eventToggle = toggleSwitch.last();

        expect(eventToggle.key()).toEqual("event");
        expect(eventToggle.prop("checked")).toBe(false);
        expect(eventToggle.prop("className")).toEqual("switch-event");
        expect(eventToggle.prop("label")).toEqual("Switch mouse over event to scrolling");
        expect(eventToggle.prop("onChange")).toBeDefined();
    });

    it ("should render ImagesContent component with default props", () => {
        // const comp = getComp(); // use this if no useEffect
        const comp = getMountedComp();
        const imageContent = comp.find(ImagesContent);
        expect(imageContent.prop("event")).toEqual("mouse over");
        expect(imageContent.prop("primaryByDefault")).toBe(true);
        expect(imageContent.prop("paths")).toEqual(mockPaths);
    });


    it ("should deal with changing checked prop of the first ToggleSwitch", () => {
        // const comp = getComp(); // use this if no useEffect
        const comp = getMountedComp();
        const toggleSwitch = comp.find(ToggleSwitch).first();
        expect(toggleSwitch.prop("checked")).toBe(false);
        expect(comp.find(ImagesContent).prop("primaryByDefault")).toBe(true);

        toggleSwitch.prop("onChange");
        
        act(() => toggleSwitch.invoke("onChange")());
        comp.update();

        expect(comp.find(ToggleSwitch).first().prop("checked")).toBe(true);
        expect(comp.find(ImagesContent).prop("primaryByDefault")).toBe(false);
    });

    it ("should deal with changing checked prop of the second ToggleSwitch", () => {
        const comp = getComp();
        const toggleSwitch = comp.find(ToggleSwitch).last();
        expect(toggleSwitch.prop("checked")).toBe(false);
        expect(toggleSwitch.prop("label")).toEqual("Switch mouse over event to scrolling");
        expect(comp.find(ImagesContent).prop("event")).toEqual("mouse over");

        toggleSwitch.prop("onChange");
        
        act(() => toggleSwitch.invoke("onChange")());
        comp.update();

        const updatedToggleSwitch = comp.find(ToggleSwitch).last();
        expect(updatedToggleSwitch.prop("checked")).toBe(true);
        expect(updatedToggleSwitch.prop("label")).toEqual("Switch scrolling event to mouse over");
        expect(comp.find(ImagesContent).prop("event")).toEqual("scrolling");
    });

    // practicing the useEffect testing
    it ("should use useEffect to set the primaryByDefault", () => {
        const shallowedComp = getComp();
        expect(shallowedComp.find(ImagesContent).prop("primaryByDefault")).toBe(false);

        const mountedComp = getMountedComp();
        expect(mountedComp.find(ImagesContent).prop("primaryByDefault")).toBe(true);
    });
});
