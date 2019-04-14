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
    })
});

function random(){
    $('.brasao').html('<img class="logo" src="assets/images/skulls/' + images[Math.floor(Math.random() * images.length)] + '" alt="Skull Fury of the Killers">');
}
