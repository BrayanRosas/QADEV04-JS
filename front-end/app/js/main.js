/**
 * Created by BrayanRosas on 8/10/2015.
 */

console.log("this is a JS code from a JS file");

var sayhello = function( name){

    var helloStr="Hello "+name+"!";
    console.log(helloStr);

};
var Person = function(name, age){
    this.name = name;
    this.age = age;

    /**
     * Function to see the name of person
     */
    this.sayHello = function(name){
        /**
         *argument se guarda los datos de una funcion
         *los argumentos ingresadoa al momento de llamar a esa funcion.
         * este objeto argument  no es un arreglo.
         */
        console.log(arguments);
        console.log("Hello ", name , "my name is  ", this.name);
    };
};
var paco=new Person("Paco", 21);
var hugo=new Person("Hugo",18);

//var age=" ";
function calculateAge(bornYear){

    age= 2015-bornYear;

    return age;
};



