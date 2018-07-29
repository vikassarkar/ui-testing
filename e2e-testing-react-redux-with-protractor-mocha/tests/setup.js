const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

global.chai = chai;
global.chaiAsPromised = chaiAsPromised
global.expect = chai.expect;