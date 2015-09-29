/**
 * Created by BrayanRosas on 9/29/2015.
 */

var TableTest=require('./table.js')
describe ('TableTest',function() {


    it('should create ships according to table size', function () {


        var table=new TableTest(4);
        var actResult=table.getSize();
        console.log(actResult);
        //actResult.
        var expRes =4;

        //Validation
        expect(actResult).toEqual(expRes);

    });


    it('should create ships according to table size', function () {


        var table=new TableTest(4);
        var actResult=table.
        console.log(actResult);
        //actResult.
        var expRes =4;

        //Validation
        expect(actResult).toEqual(expRes);

    });

});
