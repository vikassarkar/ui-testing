
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const VideoReporter = require("protractor-video-reporter");
VideoReporter.prototype.jasmineStarted = function () {
    let self = this;
    if (self.options.singleVideo) {
        const videoPath = path.join(self.options.baseDirectory, "protractor-specs.avi");
        self._startScreencast(videoPath);
        if (self.options.createSubtitles) {
            self._subtitles = [];
            self._jasmineStartTime = new Date();
        }
    }
};
const videoReport = new VideoReporter({
    baseDirectory: path.join(__dirname, "../__report__/__video-report__"),
    saveSuccessVideos: true,
    createSubtitles: true,
    singleVideo: true,
    ffmpegCmd: path.normalize("./node_modules/ffmpeg-binaries/bin/ffmpeg.exe"),
    ffmpegArgs: [
        "-f", "gdigrab",
        "-framerate", "24",
        "-video_size", "wsxga",
        "-i", "desktop",
        "-q:v", "10",
    ]
});
const PrettyReporter = require("protractor-pretty-html-reporter").Reporter;
const sanityReport = new PrettyReporter({
    path: path.join(__dirname, "../__report__/__mgmt-report__"),
    screenshotOnPassed: true,
    highlightSuspectLine: true
});
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const specReport = new SpecReporter({
    displayFailuresSummary: true,
    displayFailuredSpec: true,
    displaySuiteNumber: true,
    displaySpecDuration: true
});
const createReportsFolder = function () {
    const reportDir = [path.join(__dirname, "../__report__/__mgmt-report__"), path.join(__dirname, "../__report__/__dev-report__"), path.join(__dirname, "../__report__/__video-report__")]
    if (fs.existsSync(path.join(__dirname, "../__report__"))) {
        fse.removeSync(path.join(__dirname, "../__report__"));
    }
    for (let dir of reportDir) {
        if (!fs.existsSync(dir)) {
            fse.ensureDirSync(dir);
        }
    }
}();


exports.config = {
    allScriptsTimeout: 11000,
    framework: "jasmine",
    directConnect: true, //lets Protractor connect directly to the browser drivers only for chrome and firefox
    //seleniumAddress: "http://localhost:4444/wd/hub",
    baseUrl: "http://localhost:6606",
    specs: [
        "e2e/*spec.js",
        "e2e/**/*spec.js"
    ],
    multiCapabilities: [
        {
            "browserName": "chrome",
            "version": "ANY",
            "chromeOptions": {
                "args": ["--start-maximized", "--always-authorize-plugins"],
            }
        },
        // {
        //     "browserName": "firefox",
        //     "moz:firefoxOptions": {
        //         "args": ["--safe-mode"]
        //     },
        //     "version": "ANY",
        //     "firefoxPath": "C:/Program Files (x86)/Mozilla Firefox/firefox.exe"
        // }
    ],
    // capabilities: {
    //     "browserName": "internet explorer",
    //     "version": "ANY"
    // },
    // localSeleniumStandaloneOpts: {
    //     jvmArgs: ["-Dwebdriver.ie.driver=C:\Users\vikassar\AppData\Roaming\nvm\v8.9.4\node_modules\webdriver-manager\selenium\IEDriverServer3.13.0.exe"] // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe"
    // },
    plugins: [{
        package: "protractor-screenshoter-plugin",
        screenshotPath: path.join(__dirname, "../__report__/__dev-report__"),
        screenshotOnExpect: "failure+success",
        screenshotOnSpec: "none",
        withLogs: true,
        writeReportFreq: "asap",
        imageToAscii: "none",
        clearFoldersBeforeTest: true
    }],
    jasmineNodeOpts: {
        "showColors": true,
        "defaultTimeoutInterval": 30000,
        "print": function () { }
    },
    /**
     * The params object will be passed directly to the Protractor instance,
     * and can be accessed from your test as browser.params. It is an arbitrary
     * object and can contain anything you may need in your test.
     */
    params: {
    },
    /**
     * A callback function called once configs are read but before any
     * environment setup. This will only run once, and before onPrepare.
     * You can specify a file containing code to run by setting beforeLaunch to
     * the filename string.
     */
    beforeLaunch: function () { // Do all the typescript 
        //     require("ts-node").register({
        //         project: "e2e/tsconfig.e2e.json"
        //     });
    },
    /**
     * A callback function called once protractor is ready and available, and
     * before the specs are executed. If multiple capabilities are being run,
     * this will run once per capability.
     */
    onPrepare: () => {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        require("babel-core/register"); //required for es6
        //require("./setup.js");
        //jasmine.getEnv().addReporter(specReport, sanityReport, videoReport)
        jasmine.getEnv().addReporter(specReport)
    },
    /**
     * A callback function called once all tests have finished running and
     * the WebDriver instance has been shut down. It is passed the exit code
     * (0 if the tests passed). afterLaunch must return a promise if you want
     * asynchronous code to be executed before the program exits.
     * This is called only once before the program exits (after onCleanUp).
     */
    afterLaunch: () => {
    },
    /**
     * A callback function called once tests are finished. onComplete can
     * optionally return a promise, which Protractor will wait for before
     * shutting down webdriver.
     *
     * At this point, tests will be done but global objects will still be
     * available.
     */
    onComplete: () => {
    },
    /**
     * A callback function called once the tests have finished running and
     * the WebDriver instance has been shut down. It is passed the exit code
     * (0 if the tests passed). This is called once per capability.
     */
    onCleanUp: (exitCode) => {
        process.on("exit", function () {
            console.log("::::::::::::::::exit with exitcode: " + exitCode + " ::::::::::::::::::::::")
            process.exit(exitCode);
        });
    },
    /**
     * If set, protractor will save the test output in json format at this path.
     * The path is relative to the location of this config.
     */
    resultJsonOutputFile: "./__report__/report.json"
};
