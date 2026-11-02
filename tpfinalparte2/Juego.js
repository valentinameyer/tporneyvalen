class Juego{
  constructor(){
    this.pantalla = 1;
    this.velocidadFondo = 1; //para fondo parallax inicio
    this.huellas = [];
    this.lupa;
    this.cosas = [];
    this.reloj;
  }

dibujar(){ 
  if (this.pantalla === 1) {
    this.dibujarPantallaInicio();
  } else if (this.pantalla === 2) {
    this.dibujarPantallaCrimen();
  } 

}

clic(){ //para el clic en empezar, avanzar texto, elegir opcion, buscar huellas y cosas..
}

dibujarPantallaInicio(){
let animacion = (frameCount * this.velocidadFondo) % 800;
    image(fondoPantallaInicio, -animacion, 0, 800, 400);
    image(fondoPantallaInicio, -animacion + 800, 0, 800, 400);

drawingContext.shadowColor = color(0, 0, 0, 150); 
drawingContext.shadowBlur = 12;                   
drawingContext.shadowOffsetX = 5;                
drawingContext.shadowOffsetY = 5;                 

textFont(fuenteTitulo);
fill(255);
textSize(36);
text('El Misterio Del Valle Boscombe', 170, 200);

drawingContext.shadowBlur = 0; 
drawingContext.shadowOffsetX = 0;
drawingContext.shadowOffsetY = 0;

fill (213, 183, 137);
noStroke();
rect (280, 300, 200, 60, 15);
textFont (fuenteTexto);
fill (103, 89, 54);
textSize(33);
text('Empezar', 322, 340);


} 

dibujarPantallaCrimen(){
}

dibujarPantallaHuellas(){
}

dibujarPantallaCasa(){
}

dibujarPantallaCreditos(){
}



reiniciarJuego(){
}


crearHuellas(){
}


crearLupa(){
}

crearCosas(){
}


crearReloj(){
}

ganarJuego(){
}

perderJuego(){
}

}
