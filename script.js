case 6:
            function opcion6(){
            notaUno= Number(prompt("Digite por favor la primera nota: "));
            notaDos= Number(prompt("Digite por favor la segunda nota: "));
            notaTres= Number(prompt("Digite por favor la tercera nota: "));
            notaCuatro= Number(prompt("Digite por favor la cuarta nota: "));
            if(notaCuatro==5){
                notaUno++;
                notaDos++;
                notaTres++;
            }
            notafinal=(notaUno*0.1)+(notaDos*0.2)+(notaTres*0.3)+(notaCuatro*0.4);
            if(notafinal>3.5){
                console.log("El estudiante si ganó");
            }else{
                console.log("El estudiante no pudo ganar");
            }
        opcion6Contador++;
        }
        opcion6();
        break;