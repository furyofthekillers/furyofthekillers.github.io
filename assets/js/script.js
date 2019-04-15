var _listMembers = [];
var _skulls = [];

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
            $.each(data,function(i, members){
                $.each(members,function(i, member) {
                    _listMembers.push(member);
                });
            });
            listSkulls(_listMembers);
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
function randomSkulls(data){
    $('.brasao').html('<img class="logo" src="assets/images/skulls/fury-skull-'+data[Math.floor(Math.random() * data.length)]+'.png" alt="Skull Fury of the Killers">');
}
