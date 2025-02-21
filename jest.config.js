/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.m?js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
};

export default config;
