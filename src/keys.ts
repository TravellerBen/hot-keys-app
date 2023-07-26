const layout60Row1 = [
  ['esc', '🔒'],
  ['F1', '🔅'],
  ['F2', '🔆'],
  ['F3', ''],
  ['F4', ''],
  // ['', ''],
  ['F5', '🗣'],
  ['F6', '😃'],
  ['F7', '📷'],
  ['F8', '🎤'],
  // ['', ''],
  ['F9', '⏪'],
  ['F10', '⏯'],
  ['F11', '⏩'],
  ['F12', '🔈'],
  ['💡', '🔉'],
  ['', '🔊'],
];
const layout60Row2 = [
  ['`', '¬', 's2 esc'],
  ['1', '!'],
  ['2', '"'],
  ['3', '£'],
  ['4', '$'],
  ['5', '%'],
  ['6', '^'],
  ['7', '&'],
  ['8', '*'],
  ['9', '('],
  ['0', ')'],
  ['-', '_', 'sub'],
  ['=', '+', 'add'],
  ['back', '', 's4 back'],
];
const layout60Row3 = [
  ['tab', '', 's3 tab'],
  ['Q'],
  ['W'],
  ['E'],
  ['R'],
  ['T'],
  ['Y'],
  ['U'],
  ['I'],
  ['O'],
  ['P'],
  ['[', '{', 'openbracket'],
  [']', '}', 'closebracket'],
  ['enter', '', 's3 enter'],
];
const layout60Row4 = [
  ['caps', '', 's4 cap'],
  ['A'],
  ['S'],
  ['D'],
  ['F', '', 'dotted'],
  ['G'],
  ['H'],
  ['J', '', 'dotted'],
  ['K'],
  ['L'],
  [';', ':', 'semi'],
  [',', '@', 'comma'],
  ['#', '~', 'hash'],
  ['↩', '', 's2 enter'],
];
const layout60Row5 = [
  ['shift', '', 's3 shift'],
  ['\\', '|'],
  ['Z'],
  ['X'],
  ['C'],
  ['V'],
  ['B'],
  ['N'],
  ['M'],
  [',', '<', 'openangular'],
  ['.', '>', 'closeangular'],
  ['/', '?', 'slash'],
  ['shift', '', 's5 shift up'],
];
const layout60Row6 = [
  ['ctrl', '', 's3 control'],
  ['💻', '', 's3 win'],
  ['alt', '', 's3 alt'],
  ['____', '', 's12 space'],
  ['alt', '', 's3 alt'],
  ['fn', '', 's2 fn left'],
  ['💻', '', 's2 fn down'],
  ['ctrl', '', 's2 control right'],
];
export const layout60Keys = [
  ...layout60Row1,
  ...layout60Row2,
  ...layout60Row3,
  ...layout60Row4,
  ...layout60Row5,
  ...layout60Row6,
];

const layout80Row1 = [['M1'], ['M2'], ['M3']];
const layout80Row2 = [['ins'], ['home'], ['pgup']];
const layout80Row3 = [['del'], ['end'], ['pgdn']];
const layout80Row4 = [[''], [''], ['']];
const layout80Row5 = [[''], ['⬆'], ['']];
const layout80Row6 = [['⬅'], ['⬇'], ['➡']];

export const layout80Keys = [
  ...layout80Row1,
  ...layout80Row2,
  ...layout80Row3,
  ...layout80Row4,
  ...layout80Row5,
  ...layout80Row6,
];
