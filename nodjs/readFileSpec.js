//readFileSpec.js

var MyFs= require('./readFile.js');
describe('',function(){

it('Should read  a file sync',function(){

	var actRes=MyFs.readFile('sum.js.txt');
	expect(actRes).toBeDefined();
	expect(typeof(actRes)).toEqual('string');

});

/*/it('should read a file async.',function(){



});*/



});