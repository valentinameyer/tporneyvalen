let fondoInicio = []; 
let titulo;
let texto1;
let velocidadImagen = 1;
let escenaPantalla2 = []; 
let pantalla = 1;
let minTexto; // arranca en 0, el comienzo del substring
let maxTexto; // las letras se van incrementando por cada frame, hasta llegar al ultimo substring 
let textoActual; // seleciona el texto a mostrar
let opacidadImagen = 0; //para transparencia 
let escenaPantalla3 = [];
let imgWatson;
let imgFlechaReiniciar;
let imgSherlockHolmes;
let escenaPantalla4 = [];
let escenaPantalla5;
let escenaPantalla6 = [];
let escenaPantalla7;
let escenaPantalla8 = [];
let escenaPantalla10;
let imgHuellas;
let imgLupa;
let fondoPantalla10Actual; //variable que guarda que fondo se esta mostrando ahora
let fondoPantalla10Nuevo; // la imagen que se muestra al hacer click
 
function preload(){
  
fondoInicio.push(loadImage('assets/fondoinicio0.jpg'));
titulo = loadFont('assets/fuente.ttf');
texto1 = loadFont('assets/fuente1.ttf');
 for (let i = 0; i < 2; i++){
  escenaPantalla2.push (loadImage ( 'assets/escenacrimen0' +i+ '.png')); 
 }
for (let i= 0; i <2; i++){
escenaPantalla3.push (loadImage ('assets/pantalla3fondo0' +i+ '.jpg'));
}
imgWatson = loadImage('assets/watson00.png');
for (let i= 0; i <2; i++){
escenaPantalla4.push (loadImage ('assets/pantalla4fondo0' +i+ '.jpg'));
}
escenaPantalla5 = loadImage('assets/pantalla5fondo00.jpg');
imgFlechaReiniciar = loadImage('assets/flechareinicio.png');


for (let i = 0; i < 3; i++) {
 escenaPantalla6.push (loadImage ( 'assets/pantalla6fondo0' +i+ '.jpg'));
}
escenaPantalla7 = loadImage('assets/pantalla7fondo00.jpg');


for (let i = 0; i < 2; i++){
escenaPantalla8.push (loadImage ('assets/pantalla8fondo0' +i+ '.jpg'));
}
imgSherlockHolmes= loadImage ('assets/sherlockholmes00.png');


escenaPantalla10 = loadImage ('assets/pantalla10fondo00.jpg');
fondoPantalla10Nuevo = loadImage ('assets/pantalla10fondo01.jpg');


imgHuellas = loadImage ('assets/huellas.png');
imgLupa = loadImage ('assets/lupa.png');
}


function setup() {
createCanvas(800,450);
background(0);
textWrap (WORD); 
minTexto = 0; 
maxTexto = 0; 
textoActual = 0; 
 fondoPantalla10Actual = escenaPantalla10;
}






function draw() {
 console.log("X: " + mouseX + " Y: " + mouseY);
  
  if (pantalla === 1) {
    pantalla1();
  } else if (pantalla === 2) {
    pantalla2();
  } else if (pantalla === 3) {
    pantalla3();
  } else if (pantalla === 4) { 
    pantalla4();
  } else if (pantalla === 5) {
    pantalla5();
  }
  else if (pantalla === 6) {
   pantalla6 (); 
  }
  else if (pantalla === 7) {
   pantalla7(); 
  }
  else if (pantalla === 8) {
   pantalla8(); 
  }
    else if (pantalla === 9) {
   pantalla9(); 
  }
    else if (pantalla === 10) {
   pantalla10(); 
  }
} 


function mousePressed () {
 if (pantalla === 1) {
    if (mouseX > 280 && mouseX < 480 && mouseY > 300 && mouseY < 360) {
      pantalla = 2;
      textoActual = 0; 
      maxTexto = 0;
    }




  } else if (pantalla === 2) {
    if (maxTexto < textoPantalla2[textoActual].length) {
      maxTexto = textoPantalla2[textoActual].length; 
      if (textoActual === 1) opacidadImagen = 255;
    } else {
      textoActual++; 
      maxTexto = 0;
      opacidadImagen = 0;




      if (textoActual >= textoPantalla2.length) {
        pantalla = 3;
        textoActual = 0;
        opacidadImagen = 0;
      }
    }




  } else if (pantalla === 3) {
    if (textoActual < 2) { 
      if (maxTexto < textoPantalla3[textoActual].length) {
        maxTexto = textoPantalla3[textoActual].length;
        if (textoActual >= 1) opacidadImagen = 255;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 2) {
      // Opción Izq acompañar a Holmes
      if (mouseX > 100 && mouseX < 360 && mouseY > 350 && mouseY < 410) {
        pantalla = 4;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }


      // Opción Der quedarte en Londres
      if (mouseX > 440 && mouseX < 700 && mouseY > 350 && mouseY < 410) {
        pantalla = 5; 
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }




  } else if (pantalla === 4) { 
    if (textoActual < 4) {
      if (maxTexto < textoPantalla4[textoActual].length) {
        maxTexto = textoPantalla4[textoActual].length;
        if (textoActual >= 1) opacidadImagen = 255;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 4) {
      // Clic en Opción Izquierda
      if (mouseX > 100 && mouseX < 360 && mouseY > 350 && mouseY < 410) {
        pantalla = 6;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }


      // Clic en Opción Derecha
      if (mouseX > 440 && mouseX < 700 && mouseY > 350 && mouseY < 410) {
        pantalla = 7;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  } else if (pantalla === 5) {
    if (maxTexto < textoPantalla5[textoActual].length) {
      maxTexto = textoPantalla5[textoActual].length;
    } else {
      textoActual++;
      maxTexto = 0;
      
    }
   // clic flecha reiniciar
  if (mouseX > 360 && mouseX < 440 && mouseY > 325 && mouseY < 405) {
    pantalla = 1;
    textoActual = 0;
    maxTexto = 0;
    opacidadImagen = 0;
  }
  }
  
 else if (pantalla === 6) {
    if (textoActual < textoPantalla6.length - 1) {
      if (maxTexto < textoPantalla6[textoActual].length) {
        maxTexto = textoPantalla6[textoActual].length;
        if (textoActual >= 1) opacidadImagen = 255;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 6) {
      if (mouseX > 100 && mouseX < 360 && mouseY > 350 && mouseY < 410) {
        pantalla = 8;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseX > 440 && mouseX < 700 && mouseY > 350 && mouseY < 410) {
        pantalla = 9;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }


  } 
  else if (pantalla === 7) {
    if (textoActual < textoPantalla7.length - 1) {
      if (maxTexto < textoPantalla7[textoActual].length) {
        maxTexto = textoPantalla7[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 4) {
      if (mouseX > 100 && mouseX < 360 && mouseY > 350 && mouseY < 410) {
        pantalla = 10;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseX > 440 && mouseX < 700 && mouseY > 350 && mouseY < 410) {
        pantalla = 11;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
 else if (pantalla === 8) {
    if (textoActual < textoPantalla8.length - 1) {
      if (maxTexto < textoPantalla8[textoActual].length) {
        maxTexto = textoPantalla8[textoActual].length;
      } else {
        textoActual++;
        maxTexto = 0;
      }
    } else if (textoActual === 4) { // Cambiado de 5 a 4
      if (mouseX > 100 && mouseX < 360 && mouseY > 350 && mouseY < 410) {
        pantalla = 12;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
      if (mouseX > 440 && mouseX < 700 && mouseY > 350 && mouseY < 410) {
        pantalla = 13;
        textoActual = 0;
        maxTexto = 0;
        opacidadImagen = 0;
      }
    }
  }
  
else if (pantalla === 10) {
    if (fondoPantalla10Actual === escenaPantalla10) {
      let distanciaHuellas = dist(mouseX, mouseY, 589, 397);
      if (distanciaHuellas < 100) {
        fondoPantalla10Actual = fondoPantalla10Nuevo; 
        textoActual = 0;
        maxTexto = 0;    
      }
    }
    else {
      if (textoActual < textoPantalla10.length - 1) {
        if (maxTexto < textoPantalla10[textoActual].length) {
          maxTexto = textoPantalla10[textoActual].length;
        } else {
          textoActual++; 
          maxTexto = 0; 
        }
      } 
     else if (textoActual === textoPantalla10.length - 1) {
        if (mouseX > 100 && mouseX < 360 && mouseY > 350 && mouseY < 410) {
          pantalla = 16;
          textoActual = 0;
          maxTexto = 0;
          opacidadImagen = 0;
        }
        else if (mouseX > 440 && mouseX < 700 && mouseY > 350 && mouseY < 410) {
          pantalla = 17;
          textoActual = 0;
          maxTexto = 0;
          opacidadImagen = 0;
        }
      }
    }
}
}
