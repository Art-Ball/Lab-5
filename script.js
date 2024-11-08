let myButton = document.querySelector('.startButton');
let beat = new Audio('Music/Mariah Hell.mp3');

//switch functions
function toggleSwitch(){
    myButton.classList.toggle('on');
    document.body.classList.toggle('lit');
    beat.play(console.log('button clicked'))
    myButton.eventMode = "none"
    myButton.removeEventListener('click', toggleSwitch);

}


//listen for a click on the switch
myButton.addEventListener('click', toggleSwitch);