confirm("you want to play")

let isStarted = false;
let session = { score: 0, ptnl: 10, level: 1, mc: 0, timer: 20, hs: 0 , vitese : 300 }

//function demarage
function start(e) {
    document.querySelector("span").innerHTML = session.score;
    time();
    isStarted = true;
    document.getElementById("l3").innerHTML = "Level: " + session.level;
    e.stopPropagation();
}

//chronometre
function time() {
    const myI = setInterval(() => {
        session.timer--;

        gameOver();

        document.getElementById("L5").innerHTML = "Timer:" + session.timer;
        if (session.timer <= 0) {
            clearInterval(myI);
        }
    }, 1000);
}

document.getElementById("text").addEventListener("click", start, {
    capture: false,
    once: true
});

document.getElementById("image").addEventListener("click", function (e) {
    if (isStarted) {
        session.score+= session.level *10;
        document.getElementById("l1").innerHTML = "score:" + session.score;
        session.ptnl--;
        if (session.ptnl == 0) {
            console.log("c rentre");
            session.timer = session.timer + 10;
            session.ptnl = 10;
            session.level++;
            document.getElementById("l3").innerHTML = "Level: " + session.level;
            session.vitese = session.vitese - 50; 
        }
        document.getElementById("l2").innerHTML = "Points to Next Level:" + session.ptnl;
        e.stopPropagation();
    }
});

// function qui va activer le terrain de jeu clicable et qui v actfer plusieurs etapes pour chaque mauvais touche 
document.getElementById("fondd").addEventListener("click", function badTouch() {
    console.log("ptnl")
    //la fonction va tenlever des point du score en fonction de chaque mauvais toucher sur l'ecran 
    if (session.score > 0) {
        session.score--;
        document.getElementById("l1").innerHTML = "score:" + session.score;
    }
    //la fonction va augmente le "point to next level" en fonction de chaque mauvais toucher sur lecran 
    if (session.ptnl < 10) {
        console.log("pyz")
        session.ptnl++;
        document.getElementById("l2").innerHTML = "Points to Next Level:" + session.ptnl;

    }

    //affiche un click loupé en fonction dun mauvais toucher sur lecran 
    {
        session.mc++;
        document.getElementById("l4").innerHTML = "Missed Clicks:" + session.mc;
        console.log("ici")
    }
});

const speen = document.getElementById("image");
//bloc bleu qui s'echappe
function escape() {
    if (isStarted) {
        const myI = setTimeout(() => {
            speen.style.top = parseInt((Math.random() * 750) + 10) + 'px'
            speen.style.left = parseInt((Math.random() * 1320) + 10) + 'px'
            speen.style.animation = parseInt
            speen.style.animation = "spin 1.5s linear infinite"
        },
            session.vitese);
    }

}

const fond = document.getElementById("fondd");
fond.style.width = "1352px";
fond.style.height = "778px";

let heightCoef = 1;

speen.addEventListener("mouseover", escape)

//function qui demare le game over une fois le temp ecouler 
function gameOver() {
    console.log("wsh")
    if (session.timer == 0) {
        anime.timeline()
            .add({
                targets: '.ml15 .word',
                scale: [14, 1],
                opacity: [0, 1],
                easing: "easeOutCirc",
                duration: 800,
                delay: (el, i) => 800 * i
            })
            .add({
                targets: '.ml15',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    }
};

