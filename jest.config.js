module.exports = {
    testTimeout: 20000,
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    transform: {
        "\\.ts$": "<rootDir>/node_modules/ts-jest"
    },
    testMatch: undefined,
    testRegex: "/src/.*\\.spec\\.ts$",
    verbose: false
};