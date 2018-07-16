// npm i -D nyc chai mocha enzyme jsdom react-addons-test-utils sinon redux-mock-store enzyme-adapter-react-16

import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;
let exposedProperties = ['window', 'navigator', 'document'];

global.navigator = { userAgent: 'node.js' };
global.expect = expect;
global.sinon = sinon;
global.spy = spy;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

if (typeof window !== 'undefined') {
    const matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {
            },
            removeListener() {
            },
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
};

configure({ adapter: new Adapter() });