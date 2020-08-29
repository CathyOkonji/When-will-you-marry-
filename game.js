let nameInput = document.getElementById('name-input');
let button = document.getElementById('press-me');
let fate = document.getElementById('your-fate');
let warning = document.getElementById('warning');

console.log(button.innerText)

let name;
function generateRandomDay(max=1000, min=3) {
    let randomNumber = Math.floor(Math.random() * (max-min) + min)
    console.log(randomNumber)
    return randomNumber
}
function NameLogger(event){
    name = event.target.value;
}

function Logme(e) {
    e.preventDefault()
    if(nameInput.value){
        if(nameInput.value.length>=3){
    console.log(name);
    button.innerText = 'Forecasting your date'
    setInterval(() => {
        if(button.innerText.length==15){
            button.innerText = 'Forecasting your date'
        }
        button.innerText += '.'
    }, 1000);
    setTimeout(()=>{
        button.style.display = 'none'
        nameInput.style.display = 'none'
        warning.style.display = 'none';

    fate.innerHTML = `${name}, you're going to get married on ${moment().add(generateRandomDay(), 'days').calendar()}!`
}, 4000)
    
}
else {
    warning.innerHTML = 'Please dear, your name must have at least 3 characters!'
}
}
else {
    warning.innerText = 'Where are you running to?. Put in your name first!'
}
}

nameInput.oninput = NameLogger;
button.onclick = Logme;