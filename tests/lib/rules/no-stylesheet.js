/**
 * @fileoverview styled-components should be preferred over stylesheet
 * @author Emily Curry
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-stylesheet"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-stylesheet", rule, {
  valid: [
    {
      code: `const Styled = styled.View\`
        background-color: #fff;
    \``
    }
  ],

  invalid: [
    {
      code: `const styles = StyleSheet.create({
          styled: { backgroundColor: '#fff' }
      });`,
      errors: [
        {
          message: "StyleSheet should not be used (prefer styled-components)",
          type: "CallExpression"
        }
      ]
    }
  ]
});
