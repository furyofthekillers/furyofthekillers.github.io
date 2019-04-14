const images = [
    'jason', 
    'punisher',
    'rambo',
    'mage',
    'spawn',
    'blade',
    'coringa',
    'desmond',
    'johnwick',
    'link',
    'medic',
    'mengele',
    'sniper',
    'skeletor',
    'warmachine',
    'terminator',
    'base'
]

$(document).ready(function(){
    random();
    $('.brasao').on('click', function(){
        random();
    });    
});

function random(){
    $('.brasao').html('<img class="logo" src="assets/images/skulls/fury-skull-'+images[Math.floor(Math.random() * images.length)]+'.png" alt="Skull Fury of the Killers">');
}