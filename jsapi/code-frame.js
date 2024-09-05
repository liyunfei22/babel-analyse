const { codeFrameColumns } = require('@babel/code-frame');

const res = codeFrameColumns(`
  const a = 1;
  const b = 2;
  `, {
  start: { line: 2, column: 1 },
  end: { line: 3, column: 5 },
}, {
  highlightCode: true,
  message: '这里出错了'
});

console.log(res);
