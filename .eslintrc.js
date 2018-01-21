module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    "import/extensions": 0,
    "no-param-reassign": 0,
    "max-len": 0,
    camelcase: 0,
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    "import/no-unresolved": [
      "error",
      {
        ignore: ["~", "axios"]
      }
    ],
    indent: ["error", 2],
    "no-plusplus": 0,
    "no-bitwise": 0,
    "no-control-regex": 0,
  },
  globals: {}
}
