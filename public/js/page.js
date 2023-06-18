var x = 0;

function scrollFunction1() {
    let e = document.getElementById("myWork");
    e.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollFunction2() {
    let e = document.getElementById("services");
    e.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'center'
    });
}

    function scrollFunction3() {
        let e = document.getElementById("contactMe");
        e.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
            inline: 'center'
        });
}

    function scrollFunction4() {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

function slide() {
    let slideValue = document.getElementById('slider').value;
    document.getElementById('compare').style.clipPath = "polygon(0 0, " + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
};
function slide2() {
    let slideValue = document.getElementById('slider2').value;
    document.getElementById('compare2').style.clipPath = "polygon(0 0, " + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
};



function slideShowLeft() {
    if(x < 2)
    {
        document.getElementById('comparison').style.transform += "translate(-50%)";
        document.getElementById('comparison').style.transitionDuration = "0.5s";
        document.getElementById('comparison').style.zIndex = "2";
        x = x + 1;
    }
    console.log(x);
}

function slideShowRight() {
    if(x > 0)
    {
        document.getElementById('comparison').style.transform += "translate(50%)";
        document.getElementById('comparison').style.transitionDuration = "0.5s";
        document.getElementById('comparison').style.zIndex = "2";
        x = x - 1;
    }
}