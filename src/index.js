import {compose, pipe} from 'lodash/fp';

const input = '   JavaScript   ';
const output = 'div' + input.trim().toLowerCase() + '</div';

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform(input));