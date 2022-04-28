//attribut disabled
const btn = document.querySelector("#btn");
const btnPlay = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const btntop = document.querySelector("#btnStop");
const btnStopInterval = document.querySelector("#btnStopInterval");
const btnSetTimeout = document.querySelector("#btnSetTimeout");
const input = document.querySelector("#input");

btn.addEventListener("click", () => {
  //désactiver un boutuon
  btn.disabled = true;
});

//rechercher dans un tableau (array)
let array = [
  "hello",
  "javascript",
  "chelou",
  "web",
  "anticonstitutionnellement",
  "possesion",
];
//comment vérifier si une valeur est présente dans un tableau
let result = array.indexOf("web");
console.log(result);
result = array.indexOf("toto");
console.log(result);

//rechercher dans une chaîne de caractère
let word = "lorem";
result = word.indexOf("o");
console.log(result);
result = word.indexOf("a");
console.log(result);
console.log(word[2]);
//version match
console.log(word.match("re"));
console.log(word.match("ta"));

//le cas où on a plusieurs fois la même lettre
word = "lorom";
result = word.indexOf("o");
console.log(result);
//le 2ème o
resulto2 = word.indexOf("o", result + 1);
console.log(resulto2);

//l'élément audio
const sound = new Audio("./audio/Duck.mp3");
// sound.play();

// const sound = new Audio("./audio/Duck.mp3");
// btnPlay.addEventListener("click", () => {
//   sound.play();
// });

// btnPlay.addEventListener("click", () => {
//   pause.play();
// });

btnPause.oclick = function () {
  //je lance la lecture de mon mp3
  sound.play();
};

btnPause.oclick = function () {
  //je mets en pause la lecture de mon mp3
  sound.pause();
};

btnStop.oclick = function () {
  //je stoppe la lecture de mon mp3
  sound.pause();
  sound.currentTime = 0;
};

btnStopInterval.oclick = function () {
  //j'arrete mon intervalle
  clearInterval(myInterval);
};

//lancer la répétition d'une action toutes les x secondes
let myInterval = setInterval(function () {
  const randomRed = Math.floor(Math.random() * 255);
  const randomGreen = Math.floor(Math.random() * 255);
  const randomBlue = Math.floor(Math.random() * 255);
  //color : rgb(x,y,z) ou x,y,z compris entre 0 et 255
  btnPause.style =
    "color : rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
}, 500);

input.onkeyup = function (e) {
  if (e.key === "Enter") {
    switch (this.value) {
      case "toto":
        alert("toto mais pas tata");
        break;
      //seulement si on veut un comportement par défaut
      default:
        alert("ogogol par défaut");
    }
  }
};
