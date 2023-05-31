case 4: 
            function opcion4(){
            numeroa = Number(prompt("Digite por favor el primer número: "));
            numerob = Number(prompt("Digite por favor el segundo número: "));
            
            while(valori<numeroa){
                if(numeroa % valori == 0){
                   sumauno = sumauno + valori;
                }
                valori = valori + 1;
            }
            while(valorj<numerob){
            if(numerob % valorj == 0){
                sumados = sumados + valorj;
                }
                valorj=valorj + 1;
            }
            if(sumauno==numerob && sumados==numeroa){
                console.log("Los números si son amigos");

            }
            else{
                console.log("Los números no son amigos");
            }
        opcion4Contador++;
        }
        opcion4();
        break;