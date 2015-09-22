//TRAINNER
var drawTable = function(size,text){
    var table = $('<table border="1"cellspacing="2"></table>');
    var row;
    for (var roww = 0; roww < size; roww++) {
        row = createRow();

        for (var cel = 0; cel < size; cel++) {
            row.append(createCell(text));
        };

        table.append(row);
    };

    //$('body').text('');
    //$('body').append(table);

    $('body').text('').append(table);
    attacheListeners('x');
     // EN UNA SOLA LINEA
};

var createRow = function(){
    var row = $('<tr></tr>');
    return row;
};

var createCell = function(text){
    var cell = $('<td bgcolor="#66cdaa" >' + text + '</td>');
    return cell;
};

var attacheListeners = function(text){

    $( "#mielemento" ).on( "click", function() {
        // lo que queramos realizar
    });
    $('td').on('click', function(){
        // event.target donde se realizo el evento
        $(this).text(text);
        //console.log('First cell clicked', event.target);
        //setTable();
    });

};


