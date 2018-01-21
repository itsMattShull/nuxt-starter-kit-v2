const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '.*?\\.vue$': '<rootDir>/node_modules/jest-vue-preprocessor',
    '.*': 'babel-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
    '<rootDir>/node_modules',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.{js,ts,vue}',
    'pages/**/*.{js,ts,vue}',
    '!**/node_modules/**',
    '!components/**/*.story.js',
  ],
};
