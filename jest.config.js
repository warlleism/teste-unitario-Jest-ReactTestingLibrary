module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mock/fileMock.js',
        '\\.(css|sass|less|scss)$': 'identity-obj-proxy'
    }
}