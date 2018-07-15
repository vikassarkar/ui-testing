import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
}

configure({ adapter: new Adapter() });
