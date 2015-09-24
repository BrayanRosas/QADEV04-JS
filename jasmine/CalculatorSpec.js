var Calculator=require('./calculator.js')
describe ('Calculator',function(){

	var calculator;

	beforeEach(function(){
		console.log('beforeeach');
		calculator=new Calculator();
	});

		afterEach(function(){
		console.log('afterEach');
		calculator=null;
		
	});

	it('should add to integer numbers',function(){


		//STEPS
		/*Nedd a calculator
		resAct=sum 2 and 3
		resExp=5*/
		
		var actRes=calculator.sum(2,3);
		var expRes=5;

		//Validation
		expect(actRes).toEqual(expRes);

	});




	it('should subtract to integer numbers',function(){


		//STEPS
		/*Nedd a calculator
		resAct=sum 2 and 3
		resExp=5*/
		var calculator=new Calculator();
		var actRes=calculator.subs(3,2);
		var expRes=1;

		//Validation
		expect(actRes).toEqual(expRes);
	});

	it('should divide to integer numbers',function(){


		//STEPS
		/*Nedd a calculator
		resAct=sum 2 and 3
		resExp=5*/
		var calculator=new Calculator();
		var actRes=calculator.subs(4,2);
		var expRes=2;

		//Validation
		expect(actRes).toEqual(expRes);
	});





	it('Validation that type a two numbers',function(){

		expect(function(){
			calculator.sum('s',3);

		}).toThrow('Error: The parameter is not at number');

	});


	it('Validation that div 0',function(){

		expect(function(){
			calculator.div(5,0);

		}).toThrow('Error: The division between 0');

	});


});	


