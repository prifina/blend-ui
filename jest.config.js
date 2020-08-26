module.exports = {
  /* setupFilesAfterEnv: ['./test-setup.js'], */
  coverageReporters: ["lcov", "html"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "dist",
    ".storybook",
    ".stories",
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: -100,
    },
  },
  testMatch: ["<rootDir>/packages/**/__tests__/*.js"],
};
