var Calculator=function(){
	
	//construct
};

Calculator.prototype.sum=function(a,b){
	//do something
if(typeof(a)!='number' || typeof(b)!='number')
	throw('Error: The parameter is not at number');

return a+b;


};


Calculator.prototype.subs=function(a,b){
	//do something
return a-b;

};

Calculator.prototype.div=function(a,b){
	//do something
if(typeof(a)!='number' || typeof(b)!='number')
	throw('Error: The parameter is not at number');

if(b==0)
	throw('Error: The division between 0');

return a/b;

};


module.exports=Calculator;