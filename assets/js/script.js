var _listMembers = [];
var _skulls     = [];
var _line       = [];

$(document).ready(function(){
    $('.brasao').on('click', function(){
        randomSkulls(_skulls);
    });
    carregarMembros();
});

function carregarMembros(){
    $.ajax({
        type: "GET", 
        url: "assets/json/members.json",
        timeout: 3000,
        datatype: 'JSON',
        contentType: "application/json; charset=utf-8",
        cache: false,
        error: function() {
            console.log("O servidor não conseguiu carregar os membros");
        },
        success: function(data) {
            $.each(data.members,function(i, member) {
                _listMembers.push(member);
            });
            listSkulls(_listMembers);
            // lineMembers(_listMembers);
            return _listMembers;
        }
    });
}
function listSkulls(data){
    $.each(data, function( i, member ) {
        _skulls.push(member.skull);
    });
    return _skulls;
}
function lineMembers(data){
    var lineComp = ".competitive";
    var lineCasu = ".casual";
    $.each(data, function( i, member ) {
        if(member.line == 'competitive'){
            $(lineComp).append('<li><h2>'+member.gametag+'</h2><br><span>'+member.name+'</span><br><span>'+member.date+'</span></li>');
        }
    });
    $.each(data, function( i, member ) {
        if(member.line == 'casual'){
            $(lineCasu).append('<li><h2>'+member.gametag+'</h2><br><span>'+member.name+'</span><br><span>'+member.date+'</span></li>');
        }
    });
}
function randomSkulls(data){
    $('.brasao').html('<img class="logo" src="assets/images/skulls/fury-skull-'+data[Math.floor(Math.random() * data.length)]+'.png" alt="Skull Fury of the Killers">');
}
