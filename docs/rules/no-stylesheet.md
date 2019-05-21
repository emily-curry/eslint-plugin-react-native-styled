# styled-components should be preferred over stylesheet (no-stylesheet)

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
const styles = StyleSheet.create({
  styled: { backgroundColor: "#fff" }
});
```

Examples of **correct** code for this rule:

```js
const Styled = styled.View`
  background-color: #fff;
`;
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
