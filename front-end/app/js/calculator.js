var Calculator = function (){

    this.calculateOperations=function (){
        if(arguments.length==0)
        {
            throw "Cannot do the evaluation without params";
        }
       // console.log("The max number",this.getPlus(arguments ,arguments.length -1));

            console.log("The sum is",this.getPlus(arguments ));
            console.log("The max number",this.getMax(arguments ));
            console.log("The max number",this.getMin(arguments ));
    };

 this.getPlus=function()
 {
     if (typeof(arguments[0]) == 'Object')
     {
         return getSum(arguments[0]);
     }
     return getSum(arguments);
 };

    this.getMax=function()
    {
        if (typeof(arguments[0]) == 'Object')
        {
            return getMaxim(arguments[0]);
        }
        return getMaxim(arguments);
    };

    this.getMin=function()
    {
        if (typeof(arguments[0]) == 'Object')
        {
            return getMini(arguments[0]);
        }
        return getMini(arguments);
    };

    var getSum= function (numbers,pos) {

        if(pos===undefined)
        {
        pos=numbers.length -1;
        }

        if (pos == 0)
            return numbers[pos];
        else
            return numbers[pos] + getSum(numbers, pos - 1);
    };

   var getMaxim=function (numbers,pos,max){

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
        return getMaxim(numbers,pos -1, max)

};

    var getMini=function (numbers,pos,min){

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
            return getMini(numbers,pos -1, min)

    };






};

