var hemligtTal;
var antalForsøg;

function start()
{
    gætKnap.addEventListener("click", doGuess);
    hemligtTal = Math.ceil( Math.random() * 10);
    console.log(hemligtTal);
    antalForsøg = 0;
}

function doGuess(self)
{
    antalForsøg++;
    if (gætBoks.value == hemligtTal)
    {
        svarBoks.getElementsByTagName("h2")[0].innerText = "Du har vundet!";
        svarBoks.className = "correct";
    }

}

window.addEventListener("load", start);