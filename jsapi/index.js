var babel = require("@babel/core");
const code = `const add = (a, b) => a + b;`;
const ast = babel.parse(code);
console.log(ast);
babel.transform(code, {}, function(err, result) {
  console.log(result.code);
  console.log(result.map);
  console.log(result.ast);
});

const codeFrame = require('@babel/code-frame');

const code2 = `
function add(a, b) {
  return a + b
}
`;

const result = codeFrame.codeFrameColumns(code2, { start: { line: 2, column: 5 } });
console.log(result);