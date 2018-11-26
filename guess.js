/*
En demo af et gæt et tal.
JavaScript filen guess.js (denne fil) inkluderes i spil.html

Funktionen start() mappes til det globale windows load event.
Funktionen doGuess() mappes til gætKnaps click event. Og aktiveres af keyup på gætKnap
enterGuessBox mappes til gætBoks focus event.

*/

/**
 * hemligtTal er det tal programmet har "tænkt" på, og som brugeren skal gætte.
 */
var hemligtTal;
/**
 * antalForsøg er det angange brugeren har gættet
 */
var antalForsøg;

/**
 * Udføres når window er færdigt loaded
 */
function start()
{
    // registrer events
    gætBoks.addEventListener("focus", enterGuessBox);
    gætBoks.addEventListener("keyup", function(event){ // her med inline funktion
        event.preventDefault();
        if (event.keyCode === 13) {
            gætKnap.click(gætBoks);
        }
    })
    gætKnap.addEventListener("click", doGuess);
    
    // generer et hemligt tal
    hemligtTal = Math.ceil( Math.random() * 10);
    console.log(hemligtTal); // debug
    antalForsøg = 0;
    // placer curser i gætBoks
    gætBoks.focus();
}

/**
 * markerer alt tekst i gætBoks 
 */
function enterGuessBox()
{
    gætBoks.select();
}

/**
 * Når brugeren klikker på gætKnap, eller taster enter i gætBoks
 */
function doGuess()
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
    // gen-fokuser
    gætBoks.blur();
    gætBoks.focus();
}

// Bind start til "load"-evetet
window.addEventListener("load", start);