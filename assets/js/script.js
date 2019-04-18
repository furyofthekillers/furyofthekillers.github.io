var _listMembers = [];
var _skulls     = [];
var _line       = [];

$(document).ready(function(){
    $('.brasao').on('click', function(){
        randomSkulls(_skulls);
    });
    carregarMembros();
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
});

function scrolltotop_display(){
    var el=$('.link-gotop');
    if((window.pageYOffset||document.documentElement.scrollTop)>window.innerHeight) {
      if(!el.is(':visible')) { el.stop(true, true).fadeIn(); }
    }
    else {
      if(!el.is(':animated')) { el.stop(true, true).fadeOut(); }
    }
}
function scrolltotop_position(){
    var el=$('.link-gotop');
    el.css('top', window.innerHeight-75);
    el.css('left', window.innerWidth-75);
    scrolltotop_display();
}
$(window).on('load', function(){
    $('.link-gotop').css('display', 'none');
    $('.link-gotop').css('position', 'fixed');
    scrolltotop_position();
});
$(window).on('scroll', scrolltotop_display);
$(window).on('resize', scrolltotop_position);

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
        $(".members").append("<li class=\"center-xs col-lg-3 col-md-3 col-sm-6 col-xs-12\"><div class=\"member\"><span class=\"skulls\"><img src=\"assets/images/skulls/fury-skull-"
        +member.skull+".png\" alt=\"\" class=\"skull\"></span><div class=\"data start-xs\"><h4 class=\"gametag\">"
        +member.gametag+"</h4><p class=\"name\">"
        +member.name+"</p><p class=\"date\">"
        +member.date+"</p><p class=\"patent\">"
        +member.patent+"</p></div><span class=\"links start-xs\">"
        +"<a class=\"track\" title=\"Dados do "+member.gametag+"\" target=\"_blank\" href=\"https://battlefieldtracker.com/bfv/profile/xbl/"+member.gametag+"/overview\"><i class=\"ico ico-track\">tracker</i></a>"
        +"<a class=\"clips\" title=\"Clipes do "+member.gametag+"\" target=\"_blank\" href=\"https://gamerdvr.com/gamer/"+member.gametag.replace(/\s+/g,'-').toLowerCase()+"/videos\"><i class=\"ico ico-clips\">Clips</i></a>"
        +"</span></div></li>");
    });
}
function randomSkulls(data){
    $(".brasao").html('<img class="logo" src="assets/images/skulls/fury-skull-'+data[Math.floor(Math.random() * data.length)]+'.png" alt="Skull Fury of the Killers">');
}
