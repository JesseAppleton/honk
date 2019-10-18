﻿var honkCount = 0;

var honk1 = new Audio('sounds/sfx_goose_honk_01.mp3');
var honk2 = new Audio('sounds/sfx_goose_honk_02.mp3');
var honk3 = new Audio('sounds/sfx_goose_honk_03.mp3');
var honk4 = new Audio('sounds/sfx_goose_honk_04.mp3');
var honk5 = new Audio('sounds/sfx_goose_honk_05.mp3');

var honks = Array(honk1,honk2,honk3,honk4,honk5);

window.addEventListener("keydown", doHonk);

function doHonk(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    var honk = honks[Math.floor(Math.random()*honks.length)];
    if (keyCode === 89) { 
        honk.play(); 
        honkCount++;
        document.getElementById("count").innerHTML = honkCount;
        if (honkCount >= 50){
            document.getElementById("monster").style = "display:visible; font-size:50pt;";
        }

        //fade in image of goose based on times honked?
    }
}