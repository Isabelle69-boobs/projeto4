let palavra;

function setup() {
  createCanvas(600, 600);
  palavra = mulheres();
}

function draw() {
  batata();
  abu();
  mulheres();
}

function batata(){
  background("violet");
  fill("darkblue");
  textSize(69);
  textAlign(CENTER,CENTER);
}

function abu(){
  let maximo = width;
  let minimo = 0 ;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300,300);
}

function mulheres(){
let palavras = ["vo nada", "roberto carlos", "gabi linda", "amo mulheres", "velhas me namorem", "meia nove"];
  return random(palavras);
}
