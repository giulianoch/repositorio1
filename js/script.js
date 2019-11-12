
//Pagina de inicio

function jugadores(){
        var cantJugadores =document.getElementById("cantJugadores").value;
        var usuario3=document.getElementById("usuario3");
        var usuario4=document.getElementById("usuario4");
        var usuario5=document.getElementById("usuario5");
        var ocultar1=document.getElementById("ocultarJ3");
        var ocultar2=document.getElementById("ocultarJ4");
        var ocultar3=document.getElementById("ocultarJ5");
        switch (cantJugadores){
            case "2":{
                //oculta user en el input
                usuario3.style.display = "none";
                //oculta user en el anotador
                ocultar1.style.display = "none";
                break;
            }
            case "3":
                usuario3.style.display = "block";
                usuario4.style.display = "none";

                ocultar1.style.display = "block";
                ocultar2.style.display = "none";
                break;
            case "4":
                usuario4.style.display = "block";
                usuario5.style.display = "none";

                ocultar2.style.display = "block";
                ocultar3.style.display = "none";
                break;
            case "5":
                usuario5.style.display = "block";
                ocultar3.style.display = "block";
                break;
        }
    }

 function cambiarPag(a){
     if(a==1){
        document.getElementById("page1").style.display="none";
        document.getElementById("page2").style.display="block";
        //oculto el fondo inicial
        document.body.style.backgroundImage ="none";
        document.body.style.backgroundColor="rgb(166, 255, 0,0.3)";
     }
 }   
    // con esto logro que se copie el texto en "vivo"
    var input1=document.getElementById("input1");
    var jugador1=document.getElementById("jugador1");
    var input2=document.getElementById("input2");
    var jugador2=document.getElementById("jugador2");
    var input3=document.getElementById("input3");
    var jugador3=document.getElementById("jugador3");
    var input4=document.getElementById("input4");
    var jugador4=document.getElementById("jugador4");
    var input5=document.getElementById("input5");
    var jugador5=document.getElementById("jugador5");
    input1.onkeyup = function(){
        'use strict';
        jugador1.textContent = this.value;
    }
    input2.onkeyup = function(){
        'use strict';
        jugador2.textContent = this.value;
    }
    input3.onkeyup = function(){
        'use strict';
        jugador3.textContent = this.value;
    }
    input4.onkeyup = function(){
        'use strict';
        jugador4.textContent = this.value;
    }
    input5.onkeyup = function(){
        'use strict';
        jugador5.textContent = this.value;
    }

 

// Final pagina de inicio


function tabla(){  
    //j1
    var j1uno = document.getElementsByName("unoSeis") [0];
    var j1dos = document.getElementsByName("unoSeis") [1];
    var j1tres = document.getElementsByName("unoSeis") [2];
    var j1cuatro = document.getElementsByName("unoSeis") [3];
    var j1cinco = document.getElementsByName("unoSeis") [4];
    var j1seis = document.getElementsByName("unoSeis") [5];
    var j1escalera= document.getElementsByName("efpg") [0];
    var j1full = document.getElementsByName("efpg") [1];
    var  j1poker = document.getElementsByName("efpg") [2];
    var  j1generala = document.getElementsByName("efpg") [3];

    var mostrar1 = document.getElementsByName("visor") [0];

    //j2
    var j2uno = document.getElementsByName("unoSeis") [6];
    var j2dos = document.getElementsByName("unoSeis") [7];
    var j2tres = document.getElementsByName("unoSeis") [8];
    var j2cuatro = document.getElementsByName("unoSeis") [9];
    var j2cinco = document.getElementsByName("unoSeis") [10];
    var j2seis = document.getElementsByName("unoSeis") [11];
    var j2escalera= document.getElementsByName("efpg") [4];
    var j2full = document.getElementsByName("efpg") [5];
    var j2poker = document.getElementsByName("efpg") [6];
    var j2generala = document.getElementsByName("efpg") [7];

    var mostrar2 = document.getElementsByName("visor") [1];

    //j3
    var j3uno = document.getElementsByName("unoSeis") [12];
    var j3dos = document.getElementsByName("unoSeis") [13];
    var j3tres = document.getElementsByName("unoSeis") [14];
    var j3cuatro = document.getElementsByName("unoSeis") [15];
    var j3cinco = document.getElementsByName("unoSeis") [16];
    var j3seis = document.getElementsByName("unoSeis") [17];
    var j3escalera= document.getElementsByName("efpg") [8];
    var j3full = document.getElementsByName("efpg") [9];
    var j3poker = document.getElementsByName("efpg") [10];
    var j3generala = document.getElementsByName("efpg") [11];
    var mostrar3 = document.getElementsByName("visor") [2];

    //j4
    var j4uno = document.getElementsByName("unoSeis") [18];
    var j4dos = document.getElementsByName("unoSeis") [19];
    var j4tres = document.getElementsByName("unoSeis") [20];
    var j4cuatro = document.getElementsByName("unoSeis") [21];
    var j4cinco = document.getElementsByName("unoSeis") [22];
    var j4seis = document.getElementsByName("unoSeis") [23];
    var j4escalera= document.getElementsByName("efpg") [12];
    var j4full = document.getElementsByName("efpg") [13];
    var j4poker = document.getElementsByName("efpg") [14];
    var j4generala = document.getElementsByName("efpg") [15];

    var mostrar4 = document.getElementsByName("visor") [3];

    //j5
    var j5uno = document.getElementsByName("unoSeis") [24];
    var j5dos = document.getElementsByName("unoSeis") [25];
    var j5tres = document.getElementsByName("unoSeis") [26];
    var j5cuatro = document.getElementsByName("unoSeis") [27];
    var j5cinco = document.getElementsByName("unoSeis") [28];
    var j5seis = document.getElementsByName("unoSeis") [29];
    var j5escalera= document.getElementsByName("efpg") [16];
    var j5full = document.getElementsByName("efpg") [17];
    var j5poker = document.getElementsByName("efpg") [18];
    var j5generala = document.getElementsByName("efpg") [19];

    var mostrar5 = document.getElementsByName("visor") [4];

    var total=" ";


    j1uno.addEventListener('input',function(){
        if (this.value =="Uno"){
            j1uno.value=mostrar1.value=total=1; 
        }else if(this.value =="Dos"){
            j1uno.value=mostrar1.value=total= 2;
        }else if(this.value =="Tres"){
            j1uno.value=mostrar1.value=total= 3;
        }else if(this.value =="Cuatro"){
            j1uno.value=mostrar1.value=total= 4;
        }else if(this.value =="Cinco"){
            j1uno.value=mostrar1.value=total= 5;

        }else{
            j1uno.value="X";
            total=0;
        }
    });

    j2uno.addEventListener('input',function(){
        if (this.value =="Uno"){
            j2uno.value=mostrar2.value=total=1; 
        }else if(this.value =="Dos"){
            j2uno.value=mostrar2.value=total= 2;
        }else if(this.value =="Tres"){
            j2uno.value=mostrar2.value=total= 3;
        }else if(this.value =="Cuatro"){
            j2uno.value=mostrar2.value=total= 4;
        }else if(this.value =="Cinco"){
            j2uno.value=mostrar2.value=total= 5;
        }else{
            j2uno.value="X";
            total=0;
        }
    });

    j3uno.addEventListener('input',function(){
        if (this.value =="Uno"){
            j3uno.value=mostrar3.value=total=1; 
        }else if(this.value =="Dos"){
            j3uno.value=mostrar3.value=total= 2;
        }else if(this.value =="Tres"){
            j3uno.value=mostrar3.value=total= 3;
        }else if(this.value =="Cuatro"){
            j3uno.value=mostrar3.value=total= 4;
        }else if(this.value =="Cinco"){
            j3uno.value=mostrar3.value=total= 5;
        }else{
            j3uno.value="X";
            total=0;
        }
    });
    j4uno.addEventListener('input',function(){
        if (this.value =="Uno"){
            j4uno.value=mostrar4.value=total=1; 
        }else if(this.value =="Dos"){
            j4uno.value=mostrar4.value=total= 2;
        }else if(this.value =="Tres"){
            j4uno.value=mostrar4.value=total= 3;
        }else if(this.value =="Cuatro"){
            j4uno.value=mostrar4.value=total= 4;
        }else if(this.value =="Cinco"){
            j4uno.value=mostrar4.value=total= 5;
        }else{
            j4uno.value="X";
            total=0;
        }
    });
    j5uno.addEventListener('input',function(){
        if (this.value =="Uno"){
            j5uno.value=mostrar5.value=total=1; 
        }else if(this.value =="Dos"){
            j5uno.value=mostrar5.value=total= 2;
        }else if(this.value =="Tres"){
            j5uno.value=mostrar5.value=total= 3;
        }else if(this.value =="Cuatro"){
            j5uno.value=mostrar5.value=total= 4;
        }else if(this.value =="Cinco"){
            j5uno.value=mostrar5.value=total= 5;
        }else{
            j3uno.value="X";
            total=0;
        }
    });
    //
    j1dos.addEventListener('input',function(){
        if (this.value =="Uno"){
            j1dos.value=mostrar1.value=total=parseInt(2+total);
        }else if(this.value =="Dos"){
            j1dos.value=mostrar1.value=total=parseInt(4+total);
        }else if(this.value =="Tres"){
            j1dos.value=mostrar1.value=total=parseInt(6+total);
        }else if(this.value =="Cuatro"){
            j1dos.value=mostrar1.value=total=parseInt(8+total);
        }else if(this.value =="Cinco"){
            j1dos.value=mostrar1.value=total=parseInt(10+total);
        }else{
            //pongo el +0 ya que si no hay un valor en el 1 (aunque deberia haberlo) como total tira error
            mostrar1.value=total=parseInt(total+0);
            j1dos.value="X";
        }
    });
    j2dos.addEventListener('input',function(){
        if (this.value =="Uno"){
            j2dos.value=mostrar2.value=total=parseInt(2+total);
        }else if(this.value =="Dos"){
            j2dos.value=mostrar2.value=total=parseInt(4+total);
        }else if(this.value =="Tres"){
            j2dos.value=mostrar2.value=total=parseInt(6+total);
        }else if(this.value =="Cuatro"){
            j2dos.value=mostrar2.value=total=parseInt(8+total);
        }else if(this.value =="Cinco"){
            j2dos.value=mostrar2.value=total=parseInt(10+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j1dos.value="X";
        }
    });
    j3dos.addEventListener('input',function(){
        if (this.value =="Uno"){
            j3dos.value=mostrar3.value=total=parseInt(2+total);
        }else if(this.value =="Dos"){
            j3dos.value=mostrar3.value=total=parseInt(4+total);
        }else if(this.value =="Tres"){
            j3dos.value=mostrar3.value=total=parseInt(6+total);
        }else if(this.value =="Cuatro"){
            j3dos.value=mostrar3.value=total=parseInt(8+total);
        }else if(this.value =="Cinco"){
            j3dos.value=mostrar3.value=total=parseInt(10+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j1dos.value="X";
        }
    });
    j4dos.addEventListener('input',function(){
        if (this.value =="Uno"){
            j4dos.value=mostrar4.value=total=parseInt(2+total);
        }else if(this.value =="Dos"){
            j4dos.value=mostrar4.value=total=parseInt(4+total);
        }else if(this.value =="Tres"){
            j4dos.value=mostrar4.value=total=parseInt(6+total);
        }else if(this.value =="Cuatro"){
            j4dos.value=mostrar4.value=total=parseInt(8+total);
        }else if(this.value =="Cinco"){
            j4dos.value=mostrar4.value=total=parseInt(10+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j1dos.value="X";
        }
    });
    j5dos.addEventListener('input',function(){
        if (this.value =="Uno"){
            j5dos.value=mostrar5.value=total=parseInt(2+total);
        }else if(this.value =="Dos"){
            j5dos.value=mostrar5.value=total=parseInt(4+total);
        }else if(this.value =="Tres"){
            j5dos.value=mostrar5.value=total=parseInt(6+total);
        }else if(this.value =="Cuatro"){
            j5dos.value=mostrar5.value=total=parseInt(8+total);
        }else if(this.value =="Cinco"){
            j5dos.value=mostrar5.value=total=parseInt(10+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5dos.value="X";
        }
    });

    //
    j1tres.addEventListener('input',function(){
        if (this.value =="Uno"){
            j1tres.value=mostrar1.value= total=parseInt(3+total);
        }else if(this.value =="Dos"){
            j1tres.value=mostrar1.value= total=parseInt(6+total);
        }else if(this.value =="Tres"){
            j1tres.value=mostrar1.value= total=parseInt(9+total);
        }else if(this.value =="Cuatro"){
            j1tres.value=mostrar1.value= total=parseInt(12+total);
        }else if(this.value =="Cinco"){
            j1tres.value=mostrar1.value= total=parseInt(15+total);
        }else{
            mostrar1.value=total=parseInt(total+0);
            j1tres.value="X";
        }
    });
    j2tres.addEventListener('input',function(){
        if (this.value =="Uno"){
            j2tres.value=mostrar2.value= total=parseInt(3+total);
        }else if(this.value =="Dos"){
            j2tres.value=mostrar2.value= total=parseInt(6+total);
        }else if(this.value =="Tres"){
            j2tres.value=mostrar2.value= total=parseInt(9+total);
        }else if(this.value =="Cuatro"){
            j2tres.value=mostrar2.value= total=parseInt(12+total);
        }else if(this.value =="Cinco"){
            j2tres.value=mostrar2.value= total=parseInt(15+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j2tres.value="X";
        }
    });
    j3tres.addEventListener('input',function(){
        if (this.value =="Uno"){
            j3tres.value=mostrar3.value= total=parseInt(3+total);
        }else if(this.value =="Dos"){
            j3tres.value=mostrar3.value= total=parseInt(6+total);
        }else if(this.value =="Tres"){
            j3tres.value=mostrar3.value= total=parseInt(9+total);
        }else if(this.value =="Cuatro"){
            j3tres.value=mostrar1.value= total=parseInt(12+total);
        }else if(this.value =="Cinco"){
            j3tres.value=mostrar3.value= total=parseInt(15+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j3tres.value="X";
        }
    });
    j4tres.addEventListener('input',function(){
        if (this.value =="Uno"){
            j4tres.value=mostrar4.value= total=parseInt(3+total);
        }else if(this.value =="Dos"){
            j4tres.value=mostrar4.value= total=parseInt(6+total);
        }else if(this.value =="Tres"){
            j4tres.value=mostrar4.value= total=parseInt(9+total);
        }else if(this.value =="Cuatro"){
            j4tres.value=mostrar4.value= total=parseInt(12+total);
        }else if(this.value =="Cinco"){
            j4tres.value=mostrar4.value= total=parseInt(15+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j4tres.value="X";
        }
    });
    j5tres.addEventListener('input',function(){
        if (this.value =="Uno"){
            j5tres.value=mostrar5.value= total=parseInt(3+total);
        }else if(this.value =="Dos"){
            j5tres.value=mostrar5.value= total=parseInt(6+total);
        }else if(this.value =="Tres"){
            j5tres.value=mostrar5.value= total=parseInt(9+total);
        }else if(this.value =="Cuatro"){
            j5tres.value=mostrar5.value= total=parseInt(12+total);
        }else if(this.value =="Cinco"){
            j5tres.value=mostrar5.value= total=parseInt(15+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5tres.value="X";
        }
    });
    //
    j1cuatro.addEventListener('input',function(){
        if (this.value =="Uno"){
            j1cuatro.value=mostrar1.value=total=parseInt(4+total);
        }else if(this.value =="Dos"){
            j1cuatro.value=mostrar1.value=total=parseInt(8+total);
        }else if(this.value =="Tres"){
            j1cuatro.value=mostrar1.value=total=parseInt(12+total);
        }else if(this.value =="Cuatro"){
            j1cuatro.value=mostrar1.value=total=parseInt(16+total);
        }else if(this.value =="Cinco"){
            j1cuatro.value=mostrar1.value=total=parseInt(20+total);
        }else{
            mostrar1.value=total=parseInt(total+0);
            j1cuatro.value="X";
        }
    });

    j2cuatro.addEventListener('input',function(){
        if (this.value =="Uno"){
            j2cuatro.value=mostrar2.value=total=parseInt(4+total);
        }else if(this.value =="Dos"){
            j2cuatro.value=mostrar2.value=total=parseInt(8+total);
        }else if(this.value =="Tres"){
            j2cuatro.value=mostrar2.value=total=parseInt(12+total);
        }else if(this.value =="Cuatro"){
            j2cuatro.value=mostrar2.value=total=parseInt(16+total);
        }else if(this.value =="Cinco"){
            j2cuatro.value=mostrar2.value=total=parseInt(20+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j2cuatro.value="X";
        }
    });
    j3cuatro.addEventListener('input',function(){
        if (this.value =="Uno"){
            j3cuatro.value=mostrar3.value=total=parseInt(4+total);
        }else if(this.value =="Dos"){
            j3cuatro.value=mostrar3.value=total=parseInt(8+total);
        }else if(this.value =="Tres"){
            j3cuatro.value=mostrar3.value=total=parseInt(12+total);
        }else if(this.value =="Cuatro"){
            j3cuatro.value=mostrar3.value=total=parseInt(16+total);
        }else if(this.value =="Cinco"){
            j3cuatro.value=mostrar3.value=total=parseInt(20+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j3cuatro.value="X";
        }
    });
    j4cuatro.addEventListener('input',function(){
        if (this.value =="Uno"){
            j4cuatro.value=mostrar4.value=total=parseInt(4+total);
        }else if(this.value =="Dos"){
            j4cuatro.value=mostrar4.value=total=parseInt(8+total);
        }else if(this.value =="Tres"){
            j4cuatro.value=mostrar4.value=total=parseInt(12+total);
        }else if(this.value =="Cuatro"){
            j4cuatro.value=mostrar4.value=total=parseInt(16+total);
        }else if(this.value =="Cinco"){
            j4cuatro.value=mostrar4.value=total=parseInt(20+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j4cuatro.value="X";
        }
    });
    j5cuatro.addEventListener('input',function(){
        if (this.value =="Uno"){
            j5cuatro.value=mostrar5.value=total=parseInt(4+total);
        }else if(this.value =="Dos"){
            j5cuatro.value=mostrar5.value=total=parseInt(8+total);
        }else if(this.value =="Tres"){
            j5cuatro.value=mostrar5.value=total=parseInt(12+total);
        }else if(this.value =="Cuatro"){
            j5cuatro.value=mostrar5.value=total=parseInt(16+total);
        }else if(this.value =="Cinco"){
            j5cuatro.value=mostrar5.value=total=parseInt(20+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5cuatro.value="X";
        }
    });
    //
    j1cinco.addEventListener('input',function(){
        if (this.value =="Uno"){
            j1cinco.value=mostrar1.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j1cinco.value=mostrar1.value=total=parseInt(10+total);
        }else if(this.value =="Tres"){
            j1cinco.value=mostrar1.value=total=parseInt(15+total);
        }else if(this.value =="Cuatro"){
            j1cinco.value=mostrar1.value=total=parseInt(20+total);
        }else if(this.value =="Cinco"){
            j1cinco.value=mostrar1.value=total=parseInt(25+total);
        }else{
            mostrar1.value=total=parseInt(total+0);
            j1cinco.value="X";
        }
    });

    j2cinco.addEventListener('input',function(){
        if (this.value =="Uno"){
            j2cinco.value=mostrar2.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j2cinco.value=mostrar2.value=total=parseInt(10+total);
        }else if(this.value =="Tres"){
            j2cinco.value=mostrar2.value=total=parseInt(15+total);
        }else if(this.value =="Cuatro"){
            j2cinco.value=mostrar2.value=total=parseInt(20+total);
        }else if(this.value =="Cinco"){
            j2cinco.value=mostrar2.value=total=parseInt(25+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j2cinco.value="X";
        }
    });

    j3cinco.addEventListener('input',function(){
        if (this.value =="Uno"){
            j3cinco.value=mostrar3.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j3cinco.value=mostrar3.value=total=parseInt(10+total);
        }else if(this.value =="Tres"){
            j3cinco.value=mostrar3.value=total=parseInt(15+total);
        }else if(this.value =="Cuatro"){
            j3cinco.value=mostrar3.value=total=parseInt(20+total);
        }else if(this.value =="Cinco"){
            j3cinco.value=mostrar3.value=total=parseInt(25+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j3cinco.value="X";
        }
    });

    j4cinco.addEventListener('input',function(){
        if (this.value =="Uno"){
            j4cinco.value=mostrar4.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j4cinco.value=mostrar4.value=total=parseInt(10+total);
        }else if(this.value =="Tres"){
            j4cinco.value=mostrar4.value=total=parseInt(15+total);
        }else if(this.value =="Cuatro"){
            j4cinco.value=mostrar4.value=total=parseInt(20+total);
        }else if(this.value =="Cinco"){
            j4cinco.value=mostrar4.value=total=parseInt(25+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j4cinco.value="X";
        }
    });

    j5cinco.addEventListener('input',function(){
        if (this.value =="Uno"){
            j5cinco.value=mostrar5.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j5cinco.value=mostrar5.value=total=parseInt(10+total);
        }else if(this.value =="Tres"){
            j5cinco.value=mostrar5.value=total=parseInt(15+total);
        }else if(this.value =="Cuatro"){
            j5cinco.value=mostrar5.value=total=parseInt(20+total);
        }else if(this.value =="Cinco"){
            j5cinco.value=mostrar5.value=total=parseInt(25+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5cinco.value="X";
        }
    });

    //
    j1seis.addEventListener('input',function(){
        if (this.value =="Uno"){
            j1seis.value=mostrar1.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j1seis.value=mostrar1.value=total=parseInt(5+total);
        }else if(this.value =="Tres"){
            j1seis.value=mostrar1.value=total=parseInt(5+total);
        }else if(this.value =="Cuatro"){
            j1seis.value=mostrar1.value=total=parseInt(5+total);
        }else if(this.value =="Cinco"){
            j1seis.value=mostrar1.value=total=parseInt(5+total);
        }else{
            mostrar1.value=total=parseInt(total+0);
            j1seis.value="X";
        }
    });

    j2seis.addEventListener('input',function(){
        if (this.value =="Uno"){
            j2seis.value=mostrar2.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j2seis.value=mostrar2.value=total=parseInt(5+total);
        }else if(this.value =="Tres"){
            j2seis.value=mostrar2.value=total=parseInt(5+total);
        }else if(this.value =="Cuatro"){
            j2seis.value=mostrar2.value=total=parseInt(5+total);
        }else if(this.value =="Cinco"){
            j2seis.value=mostrar2.value=total=parseInt(5+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j2seis.value="X";
        }
    });

    j3seis.addEventListener('input',function(){
        if (this.value =="Uno"){
            j3seis.value=mostrar3.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j3seis.value=mostrar3.value=total=parseInt(5+total);
        }else if(this.value =="Tres"){
            j3seis.value=mostrar3.value=total=parseInt(5+total);
        }else if(this.value =="Cuatro"){
            j3seis.value=mostrar3.value=total=parseInt(5+total);
        }else if(this.value =="Cinco"){
            j3seis.value=mostrar3.value=total=parseInt(5+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j3seis.value="X";
        }
    });

    j4seis.addEventListener('input',function(){
        if (this.value =="Uno"){
            j4seis.value=mostrar4.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j4seis.value=mostrar4.value=total=parseInt(5+total);
        }else if(this.value =="Tres"){
            j4seis.value=mostrar4.value=total=parseInt(5+total);
        }else if(this.value =="Cuatro"){
            j4seis.value=mostrar4.value=total=parseInt(5+total);
        }else if(this.value =="Cinco"){
            j4seis.value=mostrar4.value=total=parseInt(5+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j4seis.value="X";
        }
    });

    j5seis.addEventListener('input',function(){
        if (this.value =="Uno"){
            j5seis.value=mostrar5.value=total=parseInt(5+total);
        }else if(this.value =="Dos"){
            j5seis.value=mostrar5.value=total=parseInt(5+total);
        }else if(this.value =="Tres"){
            j5seis.value=mostrar5.value=total=parseInt(5+total);
        }else if(this.value =="Cuatro"){
            j5seis.value=mostrar5.value=total=parseInt(5+total);
        }else if(this.value =="Cinco"){
            j5seis.value=mostrar5.value=total=parseInt(5+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5seis.value="X";
        }
    });

    //
    j1escalera.addEventListener('input',function(){
        if(this.value=="Servido"){
            j1escalera.value=mostrar1.value=total=parseInt(25+total);
        }else if (this.value =="No servido"){
            j1escalera.value=mostrar1.value=total=parseInt(20+total);
        }else if (this.value =="Tachar"){
            mostrar1.value=total=parseInt(total+0);
            j1escalera.value="X";
        }
    });

    j2escalera.addEventListener('input',function(){
        if(this.value=="Servido"){
            j2escalera.value=mostrar2.value=total=parseInt(25+total);
        }else if (this.value =="No servido"){
            j2escalera.value=mostrar2.value=total=parseInt(20+total);
        }else if (this.value =="Tachar"){
            mostrar2.value=total=parseInt(total+0);
            j1escalera.value="X";
        }
    });

    j3escalera.addEventListener('input',function(){
        if(this.value=="Servido"){
            j3escalera.value=mostrar3.value=total=parseInt(25+total);
        }else if (this.value =="No servido"){
            j3escalera.value=mostrar3.value=total=parseInt(20+total);
        }else if (this.value =="Tachar"){
            mostrar3.value=total=parseInt(total+0);
            j3escalera.value="X";
        }
    });

    j4escalera.addEventListener('input',function(){
        if(this.value=="Servido"){
            j4escalera.value=mostrar4.value=total=parseInt(25+total);
        }else if (this.value =="No servido"){
            j4escalera.value=mostrar4.value=total=parseInt(20+total);
        }else if (this.value =="Tachar"){
            mostrar4.value=total=parseInt(total+0);
            j4escalera.value="X";
        }
    });

    j5escalera.addEventListener('input',function(){
        if(this.value=="Servido"){
            j5escalera.value=mostrar5.value=total=parseInt(25+total);
        }else if (this.value =="No servido"){
            j5escalera.value=mostrar5.value=total=parseInt(20+total);
        }else if (this.value =="Tachar"){
            mostrar5.value=total=parseInt(total+0);
            j5escalera.value="X";
        }
    });

    //
    j1full.addEventListener('input',function(){
        if(this.value =="Servido"){
            j1full.value=mostrar1.value=total=parseInt(35+total);
        }else if (this.value =="No servido"){
            j1full.value=mostrar1.value=total=parseInt(30+total);
        }else{
            mostrar1.value=total=parseInt(total+0);
            j1full.value="X";
        }
    });

    j2full.addEventListener('input',function(){
        if(this.value =="Servido"){
            j2full.value=mostrar2.value=total=parseInt(35+total);
        }else if (this.value =="No servido"){
            j2full.value=mostrar2.value=total=parseInt(30+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j2full.value="X";
        }
    });

    j3full.addEventListener('input',function(){
        if(this.value =="Servido"){
            j3full.value=mostrar3.value=total=parseInt(35+total);
        }else if (this.value =="No servido"){
            j3full.value=mostrar3.value=total=parseInt(30+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j3full.value="X";
        }
    });

    j4full.addEventListener('input',function(){
        if(this.value =="Servido"){
            j4full.value=mostrar4.value=total=parseInt(35+total);
        }else if (this.value =="No servido"){
            j4full.value=mostrar4.value=total=parseInt(30+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j4full.value="X";
        }
    });

    j5full.addEventListener('input',function(){
        if(this.value =="Servido"){
            j5full.value=mostrar5.value=total=parseInt(35+total);
        }else if (this.value =="No servido"){
            j5full.value=mostrar5.value=total=parseInt(30+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5full.value="X";
        }
    });

    //
    j1poker.addEventListener('input',function(){
        if(this.value =="Servido"){
            j1poker.value=mostrar1.value=total=parseInt(45+total);
        }else if (this.value =="No servido"){
            j1poker.value=mostrar1.value=total=parseInt(40+total);
        }else{
            mostrar1.value=total=parseInt(total+0);
            j1poker.value="X";
        }
    });

    j2poker.addEventListener('input',function(){
        if(this.value =="Servido"){
            j2poker.value=mostrar2.value=total=parseInt(45+total);
        }else if (this.value =="No servido"){
            j2poker.value=mostrar2.value=total=parseInt(40+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j2poker.value="X";
        }
    });

    j3poker.addEventListener('input',function(){
        if(this.value =="Servido"){
            j3poker.value=mostrar3.value=total=parseInt(45+total);
        }else if (this.value =="No servido"){
            j3poker.value=mostrar3.value=total=parseInt(40+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j3poker.value="X";
        }
    });

    j4poker.addEventListener('input',function(){
        if(this.value =="Servido"){
            j4poker.value=mostrar4.value=total=parseInt(45+total);
        }else if (this.value =="No servido"){
            j4poker.value=mostrar4.value=total=parseInt(40+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j4poker.value="X";
        }
    });

    j5poker.addEventListener('input',function(){
        if(this.value =="Servido"){
            j5poker.value=mostrar5.value=total=parseInt(45+total);
        }else if (this.value =="No servido"){
            j5poker.value=mostrar5.value=total=parseInt(40+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5poker.value="X";
        }
    });
    //

    j1generala.addEventListener('input',function(){
        if(this.value =="Servido"){
            j1generala.value=mostrar1.value=total=parseInt(55+total);
        }else if (this.value =="No servido"){
            generala.value=mostrar1.value=total=parseInt(50+total);
        }else{
            mostrar1.value=total=parseInt(total+0);
            j1generala.value="X";
        }
    });

    j2generala.addEventListener('input',function(){
        if(this.value =="Servido"){
            j2generala.value=mostrar2.value=total=parseInt(55+total);
        }else if (this.value =="No servido"){
            j2generala.value=mostrar2.value=total=parseInt(50+total);
        }else{
            mostrar2.value=total=parseInt(total+0);
            j2generala.value="X";
        }
    });

    j3generala.addEventListener('input',function(){
        if(this.value =="Servido"){
            j3generala.value=mostrar3.value=total=parseInt(55+total);
        }else if (this.value =="No servido"){
            j3generala.value=mostrar3.value=total=parseInt(50+total);
        }else{
            mostrar3.value=total=parseInt(total+0);
            j3generala.value="X";
        }
    });

    j4generala.addEventListener('input',function(){
        if(this.value =="Servido"){
            j4generala.value=mostrar4.value=total=parseInt(55+total);
        }else if (this.value =="No servido"){
            j4generala.value=mostrar4.value=total=parseInt(50+total);
        }else{
            mostrar4.value=total=parseInt(total+0);
            j4generala.value="X";
        }
    });

    j5generala.addEventListener('input',function(){
        if(this.value =="Servido"){
            j5generala.value=mostrar5.value=total=parseInt(55+total);
        }else if (this.value =="No servido"){
            generala.value=mostrar5.value=total=parseInt(50+total);
        }else{
            mostrar5.value=total=parseInt(total+0);
            j5generala.value="X";
        }
    });
}

// borro los inputs
function borrar(){
    e = document.getElementsByTagName('input');
    for (i = 0; i < e.length; i++){
    if (e[i].type != 'text') continue;
    e[i].value = '';
    }
}
// con esto termina la partida y dice quien gano
function terminar(){
    var j1=document.getElementById("j1").value;
    var j2=document.getElementById("j2").value;
    var j3=document.getElementById("j3").value;
    var j4=document.getElementById("j4").value;
    var j5=document.getElementById("j5").value;
    var j1Nombre=document.getElementById("jugador1").textContent;
    var j2Nombre=document.getElementById("jugador2").textContent;
    var j3Nombre=document.getElementById("jugador3").textContent;
    var j4Nombre=document.getElementById("jugador4").textContent;
    var j5Nombre=document.getElementById("jugador5").textContent;

    var array = [j1,j2,j3,j4,j5]
    var mayor = Math.max.apply(Math,array);
    if(mayor==j1){
        alert( j1Nombre + " gano la partida con "+ j1 + " puntos");
    }else if(mayor==j2){
        alert( j2Nombre + " gano la partida con "+ j2 + " puntos");
    }else if(mayor==j3){
        alert( j3Nombre + " gano la partida con "+ j3 + " puntos");
    }else if(mayor==j4){
        alert( j4Nombre + " gano la partida con "+ j4 + " puntos");
    }else if(mayor==j5){
        alert( j5Nombre + " gano la partida con "+ j5 + " puntos");
    }
    //luego de apretar aceptar, refreshea la pagina
    window.location.reload();
}