/**
 * Created by BrayanRosas on 8/20/2015.
 */

var printFormatDate= function ()

{
    var actualDate=new Date();


    //console.log("Current time is");
    var literal=actualDate.toString().substr(0,3);
    console.log("Today is:" ,literal);


};
printFormatDate();



var getMirror= function (number)
{

     var arr=  number.toString();

    var arrString =arr.split("");
    var mirror=arrString.reverse();

    return parseInt(mirror.join(""));


};

var isCapicua=function (number)
{
  var numMirror=getMirror(number);
    if(numMirror==number)
        return true;
    return false;

};

var getCapicuasRamge=function(offset,limit)
{
  for (var i=offset;i<=limit;i++)
  {

      if(isCapicua(i))
        return i;

  }
        return "No existe un capicua en ese rango";
};

