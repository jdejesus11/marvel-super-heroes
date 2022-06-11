// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            './__mocks__/fileMock.js',
        '\\.(css|scss)$': './__mocks__/fileMock.js',
    },
}

module.exports = config

// Or async function
module.exports = async () => {
    return {
        verbose: true,
        testEnvironment: 'jsdom',
        moduleNameMapper: {
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
                './__mocks__/fileMock.js',
            '\\.(css|scss)$': './__mocks__/fileMock.js',
        },
    }
}
