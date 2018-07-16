module.exports = {
  "verbose": true,
  "notify": true,
  "notifyMode": "failure-success",
  "collectCoverageFrom": [
    "<rootDir>/src/views/*.js",
    "<rootDir>/src/views/*.jsx",
    "<rootDir>/src/views/**/*.js",
    "<rootDir>/src/views/**/*.jsx",
    "<rootDir>/src/store/**/*.js"
  ],
  "collectCoverage": false,
  "coverageDirectory": "<rootDir>/__coverage__/",
  "coveragePathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/test",
    "<rootDir>/__coverage__"
  ],
  "coverageReporters": ["html", "text"],
  "coverageThreshold": {
    "global": {
      "statements": 50,
      "branches": 50,
      "functions": 80,
      "lines": 80
    }
  },
  "setupFiles": [
    "<rootDir>//tests/Config.js"
  ],
  "testRegex": "/tests/.*\\.(test|spec)\\.(ts|tsx|js|jsx)$",
  // npm packages for react-js(npm i -D jest jest-enzyme redux-mock-store reflect-metadata sinon enzyme enzyme-adapter-react-16)
  // additional requirement for react-ts (npm i -D ts-jest @types/jest)
  // "transform": {
  //   "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  // },
  // "globals": {
  //   "ts-jest": {
  //     "tsConfigFile": "./tests/tsconfig.test.json"
  //   }
  // },
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/"
  ]
};
