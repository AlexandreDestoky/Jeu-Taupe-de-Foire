//SELECTION DU DOM
let taupes = document.querySelectorAll(".taupe");
let score = document.querySelector(".score");
let coup = document.getElementById("SonCoup");
let nbrPoints = 0;

//Apparition des taupes de manières aléatoires
let apparition = setInterval(() => {
  let nbrRandom = Math.floor(Math.random() * taupes.length);
  taupes[nbrRandom].style.top = "20px";
  setTimeout(() => {
    taupes[nbrRandom].style.top = "100px";
  }, 6000);
}, 1000);

for (const taupe of taupes) {
  //Quand on clique sur une taupe ..

  taupe.addEventListener("click", () => {
    //on change le cursuer pour 200ms
    taupe.style.cursor = "url('test4.png'),auto";
    setTimeout(() => {
      taupe.style.cursor = "url('test3.png'),auto";
    }, 200);

    //on monte le score et on fait redescendre la taupe pour éviter de cliquer
    //plusieurs fois et de gagner 10 points sur la même taupe par exemple
    nbrPoints++;
    score.innerHTML = `Score : ${nbrPoints}`;
    taupe.style.top = "100px";
    coup.play();
  });
}
