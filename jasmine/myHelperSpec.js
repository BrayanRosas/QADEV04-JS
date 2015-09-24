var Calculator=require('./calculator.js')
describe ('Calculator',function(){
	it('should add to integer numbers',function(){


		//STEPS
		/*Nedd a calculator
		resAct=sum 2 and 3
		resExp=5*/
		var calculator=new Calculator();
		var actRes=calculator.sum(2,3);
		var expRes=5;

		//Validation
		expected(actRes).toEqual(expRes));


	} );
});	


