import React from "react";
import { shallow } from "enzyme";
import ImagesContent, { getIndexes } from "components/ImagesContent";
import OnMouseOverImage from "components/OnMouseOverImage";
import OnScrollImage from "components/OnScrollImage";

describe("ImagesContent", () => {
    const mockPaths = [["primary.jpg", "secondary.jpg"]];
    const getComp = (event, primaryByDefault) => shallow(
        <ImagesContent
            event={event}
            primaryByDefault={primaryByDefault}
            paths={mockPaths}
        />
    );

    it ("should render OnMouseOverImage children when given event is not scrolling", () => {
        const comp = getComp();
        expect(comp.exists()).toBe(true);
        expect(comp.find(OnMouseOverImage).length).toEqual(1);
        expect(comp.find(OnScrollImage).length).toEqual(0);
    });

    it ("should render OnScrollImage children when given event is scrolling", () => {
        const comp = getComp("scrolling");
        expect(comp.exists()).toBe(true);
        expect(comp.find(OnScrollImage).length).toEqual(1);
        expect(comp.find(OnMouseOverImage).length).toEqual(0);
    });

    it ("should pass props into children components", () => {
        const comp = getComp("scrolling", true);

        const eventElement = comp.find(OnScrollImage);
        expect(eventElement.key()).toEqual("0");
        expect(eventElement.prop("primaryImg")).toEqual("primary.jpg");
        expect(eventElement.prop("secondaryImg")).toEqual("secondary.jpg");
    });
});

describe("getIndexes", () => {
    it ("should return object with indexes when primaryByDefault is falsy", () => {
        const expected = { primaryIndex: 1, secondaryIndex: 0 };
        expect(getIndexes(undefined)).toMatchObject(expected);
        expect(getIndexes(false)).toEqual(expected);
    });

    it ("should return object with indexes when primaryByDefault is true", () => {
        const output = getIndexes(true);
        expect(output).toHaveProperty('primaryIndex', 0);
        expect(output).toHaveProperty('secondaryIndex', 1);
    });
});
