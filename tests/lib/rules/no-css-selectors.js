'use strict'

const rule = require('../../../lib/rules/no-css-selectors')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

const errors = [{ messageId: 'unexpected' }]
const parserOptions = { ecmaVersion: 6 }

ruleTester.run('no-css-selectors', rule, {
  valid: [
    { code: 'cy.get("#element");', parserOptions },
    { code: 'cy.get(undefined);', parserOptions },
  ],

  invalid: [
    { code: 'cy.get(".some > element")', parserOptions, errors },
  ],
})
