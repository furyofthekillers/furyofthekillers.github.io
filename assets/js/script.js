$(document).ready(function(){
    $('.brasao').on('click', function(){
        random(skulls);
    });
    var skulls = [];    
    carregarMembros(skulls);
});



function carregarMembros(skulls){
    var url = "assets/json/members.json";
    $.ajax({
        type: "GET", 
        url: url,
        timeout: 3000,
        datatype: 'JSON',
        contentType: "application/json; charset=utf-8",
        cache: false,
        beforeSend: function() {
            console.log("Loading members...");
        },
        error: function() {
            console.log("O servidor não conseguiu carregar os membros");
        },
        success: function(data) {
            $.each(data,function(i, members){
                $.each(members,function(i, member){
                    tag     = member.gametag;
                    name    = member.name;
                    date    = member.date;
                    patent  = member.patent;
                    skull   = member.skull;
                    line    = member.line;

                    skulls[i] = member.skull;
                    // console.log('Gametag: '+tag);
                    // console.log('Nome: '+name);
                    // console.log('Nasc: '+date);
                    // console.log('Patente: '+patent);
                    // console.log('Skull: '+skull);
                    // console.log('Linha: '+line);
                    // console.log('_______');
                    return skulls;
                });
                console.log('skulls: '+skulls);
                random(skulls);
            });
        }
    });
}

function random(data){
    $('.brasao').html('<img class="logo" src="assets/images/skulls/fury-skull-'+data[Math.floor(Math.random() * data.length)]+'.png" alt="Skull Fury of the Killers">');
}