var Calculator = function (){

    this.calculateOperations=function (){
        if(arguments.length==0)
        {
            throw "Cannot do the evaluation without params";
        }
       // console.log("The max number",this.getSum(arguments ,arguments.length -1));

            console.log("The sum is",this.getSum(arguments ));
            console.log("The max number",this.getMax(arguments ));
            console.log("The max number",this.getMin(arguments ));
    };


 this.getPlus=function(numbers,pos)
 {
     if(typeof(arguments)==Object)
        this. getSum(arguments[0]);
     this.getSum(arguments);
 };


this.getSum= function (numbers,pos) {

        if(pos===undefined)
        {
        pos=numbers.length -1;
        }

        if (pos == 0)
            return numbers[pos];
        else
            return numbers[pos] + this.getSum(numbers, pos - 1);
    };

this.getMax=function (numbers,pos,max){

    if(pos===undefined)
    {
        pos=numbers.length -1;
    }

    if(max===undefined || numbers[pos]>max )
    {
        max= numbers[pos];
    }
    if(numbers[pos]>max) {

        max=numbers[pos];
    }

    if (pos==0)
        return max;
    else
        return this.getMax(numbers,pos -1, max)

};

    this.getMin=function (numbers,pos,min){

        if(pos===undefined)
        {
            pos=numbers.length -1;
        }

        if(min===undefined || numbers[pos]<min )
        {
            min= numbers[pos];
        }
        if(numbers[pos]<min) {

            min=numbers[pos];
        }

        if (pos==0)
            return min;
        else
            return this.getMin(numbers,pos -1, min)

    };






};

