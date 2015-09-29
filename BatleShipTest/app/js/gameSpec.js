/**
 * Created by BrayanRosas on 9/29/2015.
 */
var GameTest=require('./game.js')
describe ('GameTest',function() {


    it('the game name should be according to the name which the game was created', function () {


        //STEPS
        /*Nedd a calculator
         resAct=sum 2 and 3
         resExp=5*/

        var game=new GameTest('batle',10);
        var actResult=game.name;
        console.log(actResult);
        //actResult.
        var expRes ='batle';

        //Validation
        expect(actResult).toEqual(expRes);

    });



});