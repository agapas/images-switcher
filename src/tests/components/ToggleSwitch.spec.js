import React from "react";
import { shallow } from "enzyme";
import ToggleSwitch from "../../components/ToggleSwitch";

describe("ToggleSwitch", () => {
    const mockOnChange = jest.fn();
    const getComp = (checked) => {
        const comp = shallow(
            <ToggleSwitch
                checked={checked}
                label={"Label"}
                className={"test"}
                onChange={mockOnChange}
            />
        );
        return { comp, mockOnChange };
    };

    it ("should render without crashing", () => {
        const { comp } = getComp();

        expect(comp.exists()).toBe(true);
        expect(comp.find(".toggle-switch.test").exists()).toBe(true);
        expect(comp.find("#checkbox-test").exists()).toBe(true);
        expect(comp.find("[htmlFor='checkbox-test']").exists()).toBe(true);
        expect(comp.find(".switch-label").text()).toEqual("Label");
    });

    it ("should pass given checked into checkbox input", () => {
        const { comp } = getComp(true);

        const checkboxInput = comp.find("input[type='checkbox']");
        expect(checkboxInput.prop("checked")).toBe(true);
    });

    it ("should call onChange with mocked value", () => {
        const { comp, mockOnChange } = getComp();

        const checkboxInput = comp.find("input[type='checkbox']");
        checkboxInput.simulate("change", true);
        expect(mockOnChange).toBeCalledWith(true);
    });
});
