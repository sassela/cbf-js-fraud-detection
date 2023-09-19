module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["node_modules", "__tests__"],
  reporters: ["default", "jest-junit"],
  globals: { "ts-jest": { diagnostics: false } },
  transform: {},
};
