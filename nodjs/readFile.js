/**
 * Created by BrayanRosas on 9/4/2015.
 */

var fs = require('fs');

var fileName = process.argv[2];

module.exports= function(fileName){
    var content=fs.readFileSync(fileName).toString();


};


module.exports= {
    readFile: function (fileName){
        var content= fs.readFileSync(fileName).toString();
        return content;
    },
    readFileAsync: function(fileName){
        fs.readFile(fileName,function(err,data){
            if(err) throw 'Error  while..';
            var content=data.toString();
            var numLines=content.split('\n').length;

            console.log('file',fileName,'has',numLines,'lines');


        });


    }

};