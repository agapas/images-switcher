import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import OnMouseOverImage from "components/OnMouseOverImage";


describe("OnMouseOverImage", () => {
    const mockPrimaryImg = "primary.jpg";
    const mockSecondaryImg = "secondary.jpg";
    
    const getComp = () => mount(
        <OnMouseOverImage
            primaryImg={mockPrimaryImg}
            secondaryImg={mockSecondaryImg}
        />
    );

    it ("should render img element with initial props", () => {
        const comp = getComp();
        expect(comp.exists()).toBe(true);

        const image = comp.find("img");
        expect(image.prop("src")).toEqual(mockPrimaryImg);
        expect(image.prop("current")).toEqual(mockPrimaryImg);
        expect(image.prop("onMouseOver")).toBeDefined();
        expect(image.prop("onMouseOut")).toBeDefined();
    });

    it ("should deal with mouse over event", () => {
        const comp = getComp();
        const image = comp.find("img");
        image.simulate("mouseover");
        act(() => expect(comp.find("img").prop("current")).toEqual(mockSecondaryImg));
    });

    it ("should deal with mouse out event", () => {
        const comp = getComp();
        const image = comp.find("img");
        image.simulate("mouseout");
        act(() => expect(comp.find("img").prop("current")).toEqual(mockPrimaryImg));
    });
});
