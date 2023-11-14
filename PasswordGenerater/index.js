const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwEl = document.getElementById("pw-el");
let cpwEl = document.getElementById("cpw-el");
let copyButton = document.getElementById("copy-el");

function getRandomNUmber(){
    return Math.floor(Math.random()*characters.length);
}

function generate(){
    let passwordLength = prompt("Enter the desired password length:");
    let password1 = ""
    let password2 = ""
    for(let i =0; i<passwordLength;i++){
        password1 +=characters[getRandomNUmber()];
        password2 +=characters[getRandomNUmber()];

    }
    pwEl.textContent = password1;
    cpwEl.textContent = password2;
}
   
      
function copypw(){
    let textToCopy = pwEl.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Password copied to clipboard! = " + textToCopy);
      });
    }


