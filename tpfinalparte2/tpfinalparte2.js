//link video youtube

let objJuego;
let fuenteTitulo;
let fuenteTexto;
let fondoPantallaInicio;
let fondoPantallaCrimen;


function preload(){
fuenteTitulo = loadFont('assets/fuente.ttf');
fuenteTexto = loadFont('assets/fuente1.ttf');
fondoPantallaInicio = loadImage('assets/fondoinicio.jpg');
fondoPantallaCrimen = loadImage('assets/escenacrimen.png');
}

function setup() {
createCanvas(800,400);
objJuego = new Juego();

}


function draw() {
background(200);
objJuego.dibujar();
 console.log("X: " + mouseX + " Y: " + mouseY);

}

function mousePressed(){
objJuego.clic(); //maneja los clics según la pantalla actual
}
