import React from "react";
import { shallow } from "enzyme";
import ImagesContent, { getIndexes } from "../../components/ImagesContent";
import OnMouseOverImage from "../../components/OnMouseOverImage";
import OnScrollImage from "../../components/OnScrollImage";
import { paths } from "../../App";

describe("ImagesContent", () => {
    const getComp = (event, primaryByDefault) => shallow(
        <ImagesContent
            event={event}
            primaryByDefault={primaryByDefault}
            paths={paths}
        />
    );

    it ("should render OnMouseOverImage children when given event is not scrolling", () => {
        const comp = getComp();
        expect(comp.exists()).toBe(true);
        expect(comp.find(OnMouseOverImage).length).toEqual(paths.length);
        expect(comp.find(OnScrollImage).length).toEqual(0);
    });

    it ("should render OnScrollImage children when given event is scrolling", () => {
        const comp = getComp("scrolling");
        expect(comp.exists()).toBe(true);
        expect(comp.find(OnScrollImage).length).toEqual(paths.length);
        expect(comp.find(OnMouseOverImage).length).toEqual(0);
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
