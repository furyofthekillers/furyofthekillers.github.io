const images = [
    'fury-skull-jason.png', 
    'fury-skull-punisher.png',
    'fury-skull-rambo.png',
    'fury-skull-mage.png',
    'fury-skull-spawn.png',
    'fury-skull-blade.png',
    'fury-skull-coringa.png',
    'fury-skull-desmond.png',
    'fury-skull-johnwick.png',
    'fury-skull-link.png',
    'fury-skull-medic.png',
    'fury-skull-mengele.png',
    'fury-skull-sniper.png',
    'fury-skull-skeletor.png',
    'fury-skull-warmachine.png',
    'fury-skull-terminator.png',
    'fury-skull-base.png'
]

$(document).ready(function(){
    random();
    $('.brasao').on('click', function(){
        random();
    });    
});

function random(){
    $('.brasao').html('<img class="logo" src="assets/images/skulls/' + images[Math.floor(Math.random() * images.length)] + '" alt="Skull Fury of the Killers">');
}



var members = $.getJSON( "assets/json/members.json", function(data) {
    $.each( data.members, function( i, item ) {
        tag     = item[i].gametag;
        name    = item[i].name;
        date    = item[i].date;
        patent  = item[i].patent;
        skull   = item[i].skull;
        line    = item[i].line;
        console.log('Gametag: '+tag+' | Nome: '+name+' | Nasc: '+date+' | Patente: '+patent+' | Caveira: '+skull+' | Linha: '+line);
    });
    console.log( "success" );
}).done(function() {
    console.log( "done" );    
})
.fail(function() {
    console.log( "error" );
})
.always(function() {
    console.log( "complete" );
});

function carregarItens(){
    //variáveis
    var url = "assets/json/members.json";

    //Capturar Dados Usando Método AJAX do jQuery
    $.ajax({
        type: "GET", 
        url: url,
        timeout: 3000,
        datatype: 'JSON',
        contentType: "application/json; charset=utf-8",
        cache: false,
        beforeSend: function() {
            console.log("Carregando..."); //Carregando
        },
        error: function() {
            console.log("O servidor não conseguiu processar o pedido");
        },
        success: function(members) {
            // Interpretando retorno JSON...
            var items = members;

            // Listando cada cliente encontrado na lista...
            $.each(items,function(i, member){
                tag     = member[i].gametag;
                name    = member[i].name;
                date    = member[i].date;
                patent  = member[i].patent;
                skull   = member[i].skull;
                line    = member[i].line;
                
                console.log('Gametag: '+tag+' | Nome: '+name+' | Nasc: '+date+' | Patente: '+patent+' | Caveira: '+skull+' | Linha: '+line);
            });
                //Limpar Status de Carregando 
            console.log("Carregado"); 
        } 
    });  
}