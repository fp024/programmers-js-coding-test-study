/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ["js", "mjs"],
  testEnvironment: "node",
  transform: {
    "^.+\\.m?js$": "babel-jest",
  },
};

export default config;
