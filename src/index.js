import {pipe} from 'lodash/fp';

const input = '   JavaScript   ';
const output = 'div' + input.trim().toLowerCase() + '</div';

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap('div'));
console.log(transform(input));