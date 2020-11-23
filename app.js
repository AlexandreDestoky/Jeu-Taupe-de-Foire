//SELECTION DU DOM
let taupes = document.querySelectorAll(".taupe");
let score = document.querySelector(".score");
let coup = document.getElementById("SonCoup");
let chrono = document.querySelector(".timer");
let fondStart = document.querySelector(".start");
let btnStart = document.querySelector(".btnStart");
let scoreFinal = document.querySelector(".scoreFinal");
let nbrPoints = 0;
let secondes = 30;
let jeuFini = false;
chrono.innerHTML = `Temps : ${secondes}`;


//Apparition des taupes de manières aléatoires
let taupeRandom = () => {
  let apparition = setInterval(() => {
    if(jeuFini==false) {
      let nbrRandom = Math.floor(Math.random() * taupes.length);
      taupes[nbrRandom].style.top = "20px";
      setTimeout(() => {
        taupes[nbrRandom].style.top = "100px";
      }, 800);
    }else {
      clearInterval(apparition);
    }
  }, 800);

}

//Timer
let temps = () => {
  let timer = setInterval(() => {
    if (secondes > 0) {
      secondes--;
      chrono.innerHTML = `Temps : ${secondes}`;
    } else {
      clearInterval(timer);
      jeuFini = true;
      rejouer();
    }
  }, 1000);
};

//DETECTION CLIQUE TAUPE
for (const taupe of taupes) {
  //Quand on clique sur une taupe ..
  taupe.addEventListener("click", () => {
    if (jeuFini == false) {
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
    }
  });
}

let rejouer = () => {
  fondStart.style.display = "flex";
  scoreFinal.innerHTML = `Score Final : ${nbrPoints}`;
  btnStart.textContent = "Rejouer";
  nbrPoints = 0;
  secondes = 30;
}

//QUAND ON CLIQUE SUR START
btnStart.addEventListener("click",()=> {
  jeuFini = false;
  nbrPoints = 0;
  score.innerHTML = `Score : ${nbrPoints}`;
  secondes = 30;
  chrono.innerHTML = `Temps : ${secondes}`;
  fondStart.style.display = "none";
  taupeRandom();
  temps();
})