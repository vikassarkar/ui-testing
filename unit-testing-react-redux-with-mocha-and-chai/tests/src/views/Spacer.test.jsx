import React from 'react';
import { shallow } from 'enzyme';
import { getStore } from "../../test-mocks";
import { Spacer } from '../../../src/views/Spacer';

const AppSetup = () => {
    let props = {}
    let store = getStore(props).store;
    const wrapper = shallow(<Spacer {...props} />)
    return { props, store, wrapper }
};

describe('SPACER Component', () => {
    let wrapper, props;
    beforeEach(() => {
        wrapper = AppSetup().wrapper;
        props = AppSetup().props;
    });

    it('SPACER should have element with class .spacer in dom with length 1', () => {
        expect(wrapper.find('.spacer')).to.have.lengthOf(1);
    });

    afterEach(() => {
        wrapper.unmount();
    });
});