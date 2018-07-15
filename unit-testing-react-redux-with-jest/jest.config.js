module.exports = {
  "verbose": true,
  "notify": true,
  "notifyMode": "failure-success",
  "collectCoverageFrom": [
    "<rootDir>/src/views/*.tsx",
    "<rootDir>/src/views/*/*.tsx",
    "<rootDir>/src/store/action/*.ts",
    "<rootDir>/src/store/reducer/*.ts"
  ],
  "collectCoverage": false,
  "coverageDirectory": "<rootDir>/__coverage__/",
  "coveragePathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  "coverageReporters": ["html", "text"],
  "coverageThreshold": {
    "global": {
      "branches": 50,
      "functions": 80,
      "lines": 80,
      "statements": 50
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
    "jsx",
    "ts",
    "tsx"
  ],
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/"
  ]
};