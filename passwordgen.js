const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = [ ];
let passwordTwo = [ ];
let myPasswordOne = document.getElementById("password-one");
let myPasswordTwo = document.getElementById("password-two");
myPasswordOne.textContent = "";
myPasswordOne.textContent= "";



document.getElementById("gen-btn").addEventListener('click', function(){


    for (let i = 0; i < 15; i++) {
        
        getCharacter();
        passwordOne.push(getCharacter());
        myPasswordOne.textContent = passwordOne.join('');

    }
    passwordOne = [ ];

    for (let x = 0; x < 15; x++) {
        getCharacter();
        passwordTwo.push(getCharacter());
        myPasswordTwo.textContent = passwordTwo.join('');

    }

    passwordTwo = [ ];




    
    
})


function getCharacter() {
    // Generate a random index between 0 and the current length of the card deck
let randomIndex = Math.floor(Math.random() * characters.length);
    
    // Get the card from the deck using the random index
let randomCharacter =characters[randomIndex];

    // Remove the drawn card from the deck so it cannot be drawn agai

return randomCharacter;
 // Return the drawn card


}


