import React from "react";
import { shallow, mount } from "enzyme";
import OnScrollImage from "components/OnScrollImage";

describe("OnScrollImage", () => {
    const mockPrimaryImg = "primary.jpg";
    const mockSecondaryImg = "secondary.jpg";
    
    const getComp = () => mount(
        <OnScrollImage
            primaryImg={mockPrimaryImg}
            secondaryImg={mockSecondaryImg}
        />
    );

    it ("should don't render img if loading is true", () => {
        const comp = shallow(
            <OnScrollImage
                primaryImg={mockPrimaryImg}
                secondaryImg={mockSecondaryImg}
            />
        );
        expect(comp.type()).toBeNull();
    });

    it ("should render img element with secondary image in view", () => {
        const comp = getComp();
        const image = comp.find("img");
        expect(image.prop("src")).toEqual(mockSecondaryImg);
        expect(image.prop("style")).toMatchObject({ opacity: 1 });

    });

    it ("should render img element with half opacity when is not in view", () => {
        global.innerHeight = 350;
        const mockDomRectProps = {
            bottom: 400,
            top: 50,
        };
        Element.prototype.getBoundingClientRect = jest.fn(() => {
            return ({ ...mockDomRectProps });
        });

        const comp = getComp();
        const image = comp.find("img");
        expect(image.prop("src")).toEqual(mockPrimaryImg);
        expect(image.prop("style")).toMatchObject({ opacity: 0.5 });
    });
});
