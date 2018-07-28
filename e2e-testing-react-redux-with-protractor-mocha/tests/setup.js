const optimist = require('optimist');
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
global.chai = chai;
global.chaiAsPromised = chaiAsPromised
global.expect = chai.expect;
global.optimist = optimist;