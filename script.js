const length = document.getElementById('length');
const letterUpper = document.getElementById('letterUpper');
const letterLower = document.getElementById('letterLower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const pass = document.querySelector('.pass');

const inputs = document.querySelectorAll('input');
const buttonPassword = document.querySelector('.password');

let generatedPasswordText = '';

  
buttonPassword.addEventListener('click', () => {
    for(let i = 1; i >= parseInt(length.value); i++){

    }
    inputs.forEach((input) => {
        if(input.checked){
            if(input === letterUpper){
                handleGeneratedPassword(90, 65, length.value);
            }
            if(input === letterLower){
                handleGeneratedPassword(122, 97, length.value);
            }
            if(input === number){
                handleGeneratedPassword(57, 48, length.value);
            }
            if(input === symbol){
                handleGeneratedPassword(47, 33, length.value);
            }
        }
    })
})


function handleGeneratedPassword(max, min) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    generatedPasswordText += String.fromCharCode(random);
    pass.innerText = `${generatedPasswordText}`;
    console.log(typeof parseInt(length.value));
}


// function asciiOnlyToLowerCase(input) {
//     var result = '';
//     for (var i = 0; i < input.length; ++i) {
//         var charCode = input.charCodeAt(i);
//         if (charCode < 65 || charCode > 90) {
//             // NOT an uppercase ASCII character
//             // Append the original character
//             result += input.substr(i, 1);
//         } else {
//             // Character in the ['A'..'Z'] range
//             // Append the lowercase character
//             result += String.fromCharCode(charCode + 32);
//         }
//     }
//     return result;
// }