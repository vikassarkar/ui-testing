import { configure } from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/enzyme';
import Adapter from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/enzyme-adapter-react-16';

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
