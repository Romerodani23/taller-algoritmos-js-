case 3:
            function opcion3(){ 
            ladounoTriangulo =  Number(prompt("Digite por favor el primer lado: del triangulo: "));
            ladodosTriangulo =  Number(prompt("Digite por favor el segundo lado: del triangulo: "));
            ladotresTriangulo =  Number(prompt("Digite por favor el tercer lado: del triangulo: "));
         
            if(ladounoTriangulo==ladodosTriangulo && ladounoTriangulo==ladotresTriangulo){
                console.log("El triangulo es equilatero");
            }

            else if(ladounoTriangulo==ladodosTriangulo || ladodosTriangulo==ladotresTriangulo){
                console.log("El triangulo es isosceles")
            }
            else{
                console.log("El triangulo tiene todos sus lados desiguales, por lo tanto es escaleno")
            }
        opcion3Contador++;
        }
        opcion3();
        break;