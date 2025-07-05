const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle CSS Modules
    // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle image imports
    // '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',

    // Handle absolute imports (e.g. @/components)
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)

