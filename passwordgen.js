const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const myPasswordOne = document.getElementById("password-one");
const myPasswordTwo = document.getElementById("password-two");

const btnOne = document.getElementById('copy-btn1');
const btnTwo = document.getElementById('copy-btn2');



document.getElementById("gen-btn").addEventListener('click', function() {
    // Clear existing passwords
    myPasswordOne.textContent = "";
    myPasswordTwo.textContent = "";

    // Generate two passwords
    myPasswordOne.textContent = generatePassword(15);
    myPasswordTwo.textContent = generatePassword(15);
});

// Function to generate a password of specified length
function generatePassword(length) {
    let password = [];
    for (let i = 0; i < length; i++) {
        password.push(getRandomCharacter());
    }
    return password.join('');
}

// Function to get a random character from the characters array
function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

btnOne.addEventListener('click', () => {
    navigator.clipboard.writeText(myPasswordOne.textContent);
})

btnTwo.addEventListener('click', () => {
    navigator.clipboard.writeText(myPasswordTwo.textContent);
})

