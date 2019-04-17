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
            lineMembers(_listMembers);
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
    $.each(data, function( i, member ) {
        $('.members').append('<li class="center-xs col-lg-3 col-md-3 col-sm-6 col-xs-12"><div class="member"><span class="skulls"><img src="assets/images/skulls/fury-skull-'+member.skull+'.png" alt="" class="skull"></span><div class="data start-xs"><h4 class="gametag">'+member.gametag+'</h4><p class="name">'+member.name+'</p><p class="date">'+member.date+'</p><p class="patent">'+member.patent+'</p></div></div></li>');
    });
}
function randomSkulls(data){
    $('.brasao').html('<img class="logo" src="assets/images/skulls/fury-skull-'+data[Math.floor(Math.random() * data.length)]+'.png" alt="Skull Fury of the Killers">');
}
