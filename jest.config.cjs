module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest', // Si queremos testear archivos con typescript
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        "\\.(woff|woff2|ttf|eot|png|jpg|jpeg|svg)$": "<rootDir>/file-mock.js",
        // Add more file extensions if needed
    },
    // setupFiles: ['./jest.setup.js']
}

