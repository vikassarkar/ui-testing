// exports.config = {
//     frameworks: 'mocha', // Use mocha instead of jasmine
//     //directConnect: true, // selenium will not need a server, direct connet to chrome
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     baseUrl: 'http://localhost:6606',
//     specs: [// pattern for the test specs
//         'e2e/*spec.js',
//         'e2e/**/*spec.js'
//     ],
//     // beforeLaunch: function () { // Do all the typescript 
//     //     require('ts-node').register({
//     //         project: 'e2e/tsconfig.e2e.json'
//     //     });
//     // },
//     onPrepare: () => {
//         browser.ignoreSynchronization = true
//         // var width = 2250
//         // var height = 1200
//         // browser.driver.manage().window().setSize(width, height)
//         // require('babel-core/register')
//         // require('./setup.js')
//     },
//     mochaOpts: { // Mocha specific options 
//         reporter: "spec",
//         slow: 3000,
//         ui: 'bdd',
//         timeout: 30000
//     },
//     capabilities: {
//         'browserName': 'firefox'
//     },
//     allScriptsTimeout: 15000, // The timeout for a script run on the browser. 
// }


exports.config = {

    framework: 'mocha',
    baseUrl: 'http://localhost:3000',

    specs: ['test/e2e/*.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: () => {
        //browser.ignoreSynchronization = true
    }

}