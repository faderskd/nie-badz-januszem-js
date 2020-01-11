module.exports = {
  'moduleNameMapper': {
    // eslint-disable-next-line max-len
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'tests/mocks/fileMock.js',
    '\\.scss$': 'tests/mocks/styleMock.js',
  },
  'moduleFileExtensions': ['js'],
  'testMatch': ['**/*.js'],
  'rootDir': 'tests/bundled',
};
