var honkCount = 0;
var opactiyCount = 0;

var honk1 = new Audio('sfx_goose_honk_01.mp3');
var honk2 = new Audio('sfx_goose_honk_02.mp3');
var honk3 = new Audio('sfx_goose_honk_03.mp3');
var honk4 = new Audio('sfx_goose_honk_04.mp3');
var honk5 = new Audio('sfx_goose_honk_05.mp3');

var honks = Array(honk1,honk2,honk3,honk4,honk5);

window.addEventListener("keydown", honked);

function honked(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode === 89) {
        doHonk();
    }
}

function doHonk() {
    var honk = honks[Math.floor(Math.random()*honks.length)];
    honk.play(); 
    honkCount++;
    if (honkCount >= 15) {
        document.getElementById("monster").style = "display:visible; font-size:50pt;";
    }

    // fade in image of goose per honk
    if (opactiyCount < 1.0) {
        // console.log("Changing opacity: " + opactiyCount);
        opactiyCount += 0.05;
        document.getElementById("backer").style = "opacity:"+opactiyCount+";";
    }
}