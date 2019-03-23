const OFF = 0, WARN = 1, ERROR = 2, PRINT = 120;

module.exports = exports = {
  "extends": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 8
  },
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "arrow-body-style": [ERROR, "as-needed"],
    "no-console": OFF,
    "max-len": OFF,
    "quotes": [
      ERROR,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": PRINT
      }
    ]
  },
  "plugins": ["html", "prettier"]
};