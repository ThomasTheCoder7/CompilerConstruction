var peg = require("pegjs");
var fs = require("fs");

grammarFile = 'grammer.pegjs';
grammar = fs.readFileSync(grammarFile,'utf-8');

var parser = peg.generate(grammar);



var input1 = '6+10+(50*10)';
var outpt1 = parser.parse(input1);

console.log(outpt1);