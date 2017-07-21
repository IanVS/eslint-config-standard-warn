var standard = require('eslint-config-standard')

for (var rule in standard.rules) {
  if (standard.rules.hasOwnProperty(rule)) {
    if (Array.isArray(standard.rules[rule])) {
      if (standard.rules[rule][0] === 2 || standard.rules[rule][0] === 'error') {
        standard.rules[rule][0] = 1
      }
    } else {
      if (standard.rules[rule] === 2 || standard.rules[rule] === 'error') {
        standard.rules[rule] = 1
      }
    }
  }
}

module.exports = standard

