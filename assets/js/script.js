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



var members = $.getJSON( "assets/json/members.json", function() {
    console.log( "success" );
}).done(function( data ) {
    $.each( data.items, function( i, item ) {
        tag     = item[i].gametag;
        name    = item[i].name;
        date    = item[i].date;
        patent  = item[i].patent;
        skull   = item[i].skull;
        line    = item[i].line;
        console.log('Gametag: '+tag+' | Nome: '+name+' | Nasc: '+date+' | Patente: '+patent+' | Caveira: '+skull+' | Linha: '+line);
    });
})
.fail(function() {
    console.log( "error" );
})
.always(function() {
    console.log( "complete" );
});

// Perform other work here ...

// Set another completion function for the request above
members.complete(function() {
    console.log( "second complete" );
});