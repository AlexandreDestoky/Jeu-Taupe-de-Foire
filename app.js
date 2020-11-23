let taupes = document.querySelectorAll(".taupe");


let apparition = setInterval(()=> {
  let nbrRandom = Math.floor(Math.random()*taupes.length);
  taupes[nbrRandom].style.top = "20px";
  setTimeout(()=> {
    taupes[nbrRandom].style.top = "100px";
  },1000);
},1000)

for (const taupe of taupes) {
  taupe.addEventListener("click",()=> {
    taupe.style.cursor =  "url('test4.png'),auto";
    setTimeout(()=> {
      taupe.style.cursor =  "url('test3.png'),auto";
    },200);
  })
}