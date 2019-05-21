/**
 * @fileoverview styled-components should be preferred over stylesheet
 * @author Emily Curry
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "styled-components should be preferred over stylesheet",
      category: "Best Practices",
      recommended: true
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    return {
      CallExpression: n => {
        if (
          n.callee !== undefined &&
          n.callee.object !== undefined &&
          n.callee.object.name === "StyleSheet" &&
          n.callee.property.name === "create"
        ) {
          context.report(
            n,
            "StyleSheet should not be used (prefer styled-components)"
          );
        }
      }
    };
  }
};
