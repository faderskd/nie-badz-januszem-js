module.exports = {
  'env': {
    'browser': true,
    'es2017': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    "require-jsdoc": ["off", {}]
  },
};
