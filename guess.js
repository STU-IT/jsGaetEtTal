var hemligtTal;
var antalForsøg;

function start()
{
    gætBoks.addEventListener("focus", enterGuessBox);
    gætBoks.addEventListener("keyup", function(addEventListener){
        event.preventDefault();
        if (event.keyCode === 13) {
            gætKnap.click(gætBoks);
        }
    })
    gætKnap.addEventListener("click", doGuess);

    hemligtTal = Math.ceil( Math.random() * 10);
    console.log(hemligtTal);
    antalForsøg = 0;

    gætBoks.focus();
}

function enterGuessBox()
{
    gætBoks.select();
}

function doGuess(self)
{
    antalForsøg++;
    if (gætBoks.value == hemligtTal)
    {
        svarBoks.innerHTML = `<h2>Du har vundet!</h2>
            <p>i <span id="antal">${antalForsøg}</span> førsøg</p>`
        svarBoks.className = "correct";
    }
    else if(gætBoks.value < hemligtTal)
    {
        svarBoks.innerHTML = `<h2>Du gættede for lavt!</h2>
            <p>i <span id="antal">${antalForsøg}</span> førsøg</p>`
        svarBoks.className = "toLow";
    }
    else if(gætBoks.value > hemligtTal)
    {
        svarBoks.innerHTML = `<h2>Du gættede for højt!</h2>
            <p>i <span id="antal">${antalForsøg}</span> førsøg</p>`
        svarBoks.className = "toHigh";
    }
    gætBoks.blur();
    gætBoks.focus();
}

window.addEventListener("load", start);