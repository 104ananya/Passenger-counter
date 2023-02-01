let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;

function increment() {
  count++;
  console.log("Clicked");
  countEl.innerText = count;
}

function save() {
  console.log(count);
  let countStr = " " + count + " - ";
  saveEl.innerText += countStr;
  // or we can use saveEl.textcontent to keep spaces intact
  countEl.innerText = 0;
  count = 0;
}

let welcomeEl = document.getElementById("welcome-el");
let names = "Pal ";
let greeting = "Welcome back ";
welcomeEl.innerText = greeting + names;
welcomeEl.innerText += String.fromCodePoint(0x1f43c);
