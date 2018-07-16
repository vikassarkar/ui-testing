/**
 * TO RUN ONLY THIS FILE : npm i -g jest  >>>>>> jest -u tests/src/Spacer/Spacer.test.tsx
 * TO IGNORE ANY CODE SECTION IN COVERAGE:  "istanbul ignore next" (inside comment /*)
*/

import "reflect-metadata";
import React from 'react';
import "jest";
import { shallow } from 'enzyme';
import { getStore } from "../../test-mocks";
import { Spacer } from '../../../src/views/Spacer';

const AppSetup = () => {
    let props = {
        spacerVal:30,
        addClass:"dummyClass"
    }
    let store = getStore(props).store;
    const wrapper = shallow(<Spacer {...props} />)
    return { props, store, wrapper }
};

describe("SPACER COMPONENT TEST CASES", () => {
    let wrapper, props;
    beforeEach(() => {
        wrapper = AppSetup().wrapper;
        props = AppSetup().props;
    });

    it("SPACER should render itself and all it's subcomponents", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("SPACER should have class .spacer-component", () => {
        expect(wrapper.find(".spacer-component")).toBeDefined();
    });

    it("SPACER should have class .spacer30", () => {
        expect(wrapper.find(".spacer-component").hasClass("spacer"+props.spacerVal)).toEqual(true);
    });    

    it("SPACER should have class .dummyClass", () => {
        expect(wrapper.find(".spacer-component").hasClass(props.addClass)).toEqual(true);
    });

    afterEach(() => {
        wrapper.unmount();
    });
});
