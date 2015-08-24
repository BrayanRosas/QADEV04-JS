/**
 * Created by BrayanRosas on 8/23/2015.
 */

//num represent the n first numbers even and odd
var evenAndOdd= function(num)

{
    var impArr="";
    var parArr="";
    for(var i=1;i<=num*2;i++)
    {

        var cont=i-1;
        if(i%2!=0)
        {
            impArr+=i+",";

                continue
        }

        parArr+=i+",";

    }
    console.log(impArr);
    console.log(parArr);
};