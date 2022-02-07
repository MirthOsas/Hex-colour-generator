const hexColour = document.querySelector('.hex-colour');
const generateBtn = document.querySelector('.generate');
const body = document.body;
const defaultBgColour = '#fffff';
body.style.backgroundColor = defaultBgColour;
hexColour.innerHTML = defaultBgColour;



function generateHexColour () {
    const randomColour = Math.random().toString(16).substring(2, 8);
    hexColour.innerHTML = `#${randomColour}`;
    body.style.backgroundColor = `#${randomColour}`;
}


generateBtn.addEventListener('click', generateHexColour);