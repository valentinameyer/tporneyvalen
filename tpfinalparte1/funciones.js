function pantalla1 (){
  let animacion = (frameCount * velocidadImagen) % 1000;
      image(fondoInicio[0], -animacion, 0, 1000, 450);
  image(fondoInicio[0], -animacion +1000, 0, 1000, 450);
  drawingContext.shadowColor = color(0, 0, 0, 150); // Color y transparencia (RGBA)
  drawingContext.shadowBlur = 12;                   // Difuminado de la sombra
  drawingContext.shadowOffsetX = 5;                  // Desplazamiento horizontal
  drawingContext.shadowOffsetY = 5;                  // Desplazamiento vertical
textFont(titulo);
fill(255);
textSize(36);
text('El Misterio Del Valle Boscombe', 150, 200);
  drawingContext.shadowBlur = 0; // que no afecte a lo demas
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
fill (213, 183, 137);
noStroke();
rect (280, 300, 200, 60, 15);
textFont (texto1);
fill (103, 89, 54);
textSize(33);
text('Empezar', 320, 340);
}


function pantalla2 (){
 // Fondo base de la primera imagen siempre visible
  tint(255, 255);
  image(escenaPantalla2 [0], 0, 0, 800, 450);
 if (textoActual === 1) {
    if (opacidadImagen < 255) {
      opacidadImagen += 5; // Aumenta 5 de opacidad por frame 
    }
    
    tint(255, opacidadImagen); //fade in
    image(escenaPantalla2[1], 0, 0, 800, 450);
  }
  

  noTint();


  if (textoActual < textoPantalla2.length) {
    dibujarConversacion(textoPantalla2);
  } 
}

function pantalla3 (){
tint(255,255);
image(escenaPantalla3 [0],0,0,800,450);
 if (textoActual >= 1) { //para que luego el texto que sigue sea con la escenaPantalla3[1]
    if (opacidadImagen < 255) {
      opacidadImagen += 5; // Aumenta 5 de opacidad por frame 
    }
    
    tint(255, opacidadImagen); //fade in
    image(escenaPantalla3[1], 0, 0, 800, 450);
  }
  
  noTint();
  
if (textoActual < textoPantalla3.length) {
    dibujarConversacion(textoPantalla3); 
  }

  if (textoActual === 2) { // // Cuando llega a la pregunta "¿Qué decides hacer?" (índice 2) aparece Watson
    image(imgWatson, 100, 150, 200, 250); 
    dibujarBotonesDecision("Acompañar a Holmes", "Quedarte en Londres");
  }
}
function pantalla4(){
tint(255,255);
image(escenaPantalla4[0], 0,0, 800,450);
 if (textoActual >= 3) { 
    if (opacidadImagen < 255) {
      opacidadImagen += 5; 
    }
    
    tint(255, opacidadImagen);
    image(escenaPantalla4[1], 0, 0, 800, 450);
  }
    noTint();


  if (textoActual < textoPantalla4.length) {
    dibujarConversacion(textoPantalla4);
  } 
  if (textoActual === 4) {
    dibujarBotonesDecision("Visitar a James en prisión", "Investigar la escena del crimen");
  }
}

function pantalla5(){
image(escenaPantalla5, 0,0,800,450);
 if (textoActual < textoPantalla5.length) {
    dibujarConversacion(textoPantalla5);
    botonReiniciar();
  } 
}

function pantalla6(){
  tint (255, 255); 
  image(escenaPantalla6[0], 0, 0, 800, 450); //Fondo 0 
 
 if (textoActual >= 1) { // Fondo 1 
   if (opacidadImagen < 255) {
     opacidadImagen += 5;
   }
   tint (255, opacidadImagen);
   image (escenaPantalla6 [1], 0, 0, 800, 450);
 }
  
if (textoActual >= 3) { //Fondo 2
   if (opacidadImagen < 255) {
     opacidadImagen += 5;
   }
   tint (255, opacidadImagen);
   image (escenaPantalla6 [2], 0, 0, 800, 450);
     if (textoActual === 6) { // la pregunta: ¿Qué pista te parece más importante?
    image(escenaPantalla6[2], 0, 0, 800, 450); 
    dibujarBotonesDecision("La palabra 'rat' ", "La boina gris");
  }
 }
 
 noTint ();
   
   if (textoActual < textoPantalla6.length) { 
    dibujarConversacion(textoPantalla6);
}
}

function pantalla7(){
image(escenaPantalla7, 0,0,800,450);
if (textoActual < textoPantalla7.length) {
    dibujarConversacion(textoPantalla7);
}
 if (textoActual === 4) {   
    dibujarBotonesDecision("Las huellas", "La piedra");
 }
}
function pantalla8() {
  tint(255, 255); 

 
  if (textoActual >= 3) {
    image(escenaPantalla8[0], 0, 0, 800, 450); 
  } else if (textoActual >= 1) {
    image(escenaPantalla8[1], 0, 0, 800, 450); 
  } else {
    image(escenaPantalla8[0], 0, 0, 800, 450); 
  }


  if (textoActual >= 3) { 
    if (opacidadImagen < 255) {
      opacidadImagen += 5; 
    }
    tint(255, opacidadImagen);
    image(imgSherlockHolmes, 160 , 120, 200, 300);
  }
  noTint(); 
  if (textoActual < textoPantalla8.length) {
    dibujarConversacion(textoPantalla8);
  }
  if (textoActual === 4) { 
    dibujarBotonesDecision("Buscar vinculos de Ballarat", "No darle importancia");
  }
}
//function pantalla9(){

//}
function pantalla10(){
  image(fondoPantalla10Actual, 0, 0, 800, 450);
  if (fondoPantalla10Actual === escenaPantalla10) {
    image(imgHuellas, 400, 200, 400, 400); 
  push(); 
  imageMode(CENTER);
  image(imgLupa, mouseX, mouseY, 100, 100);
  pop();
  }
  else if (fondoPantalla10Actual === fondoPantalla10Nuevo){
  if (textoActual < textoPantalla10.length) {
    dibujarConversacion(textoPantalla10);
}
  }
if (textoActual === 4) {   
    dibujarBotonesDecision("El asesino conocia la zona", "Las huellas no son suficientes");
}
}


function dibujarConversacion(arregloTexto){
  dibujarCajaConversacion(arregloTexto);
 textFont(texto1);
  textSize(20);
  fill(255);
  let frase = arregloTexto[textoActual]; //Se guarda la oración en la variable frase
   if (maxTexto < frase.length) {
    maxTexto++; 
  }
  
  text(frase.substring(minTexto, maxTexto), 220, 45, 350);
}

function dibujarCajaConversacion(arregloTexto){
if (textoActual < arregloTexto.length) {
    push();
    noStroke();
    fill(20, 20, 20, 200); 
    rect(200, 20, 400, 70, 15);
    pop();
  }
}

function dibujarBotonesDecision(botonIzq, botonDer){
push();
textFont(texto1);
textSize(20);
textAlign(CENTER);

//botón izquierdo
fill(20,20,20,220);
stroke(53,67,59,137);
strokeWeight(2);
rect(100,350,260,60,12);
noStroke();
fill(255);
text(botonIzq, 220, 385);

//botón derecho
fill(20,20,20,220);
stroke(53,67,59,137);
strokeWeight(2);
rect(440, 350, 260, 60, 12);
noStroke();
fill(255);
text(botonDer, 570, 385);
pop();
}

function botonReiniciar(){
noFill();
stroke(0);
strokeWeight(3);
rect(360, 325, 80, 80, 15);
noStroke();
image(imgFlechaReiniciar, 375, 340, 50, 50);
}
