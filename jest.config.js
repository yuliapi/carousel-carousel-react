module.exports = {
  verbose: true,
  "testMatch": [
    "<rootDir>/lib/**/__tests__/**/*.{js,jsx,mjs}",
  ],
  "testEnvironment": "node",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "moduleFileExtensions": [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]

};
