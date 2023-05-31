function menu(){
    var numeroUno =0;
    var numeroDos =0;
    var numeroTres =0;
    var pi = Math.PI;
    var radio =0;
    var area =0;
    var ladounoTriangulo=0;
    var ladodosTriangulo=0;
    var ladotresTriangulo=0;
    var sumauno=0;
    var sumados=0;
    var numeroa=0;
    var numerob=0;
    var valori=1;
    var valorj=0;
    var valorCompra=0;
    var valorTotalFinal=0;
    var valorIVA=0;
    var notaUno=0;
    var notaDos=0;
    var notaTres=0;
    var notaCuatro=0;
    var notafinal=0;
    var opcion1Contador=0;
    var opcion2Contador=0;
    var opcion3Contador=0;
    var opcion4Contador=0;
    var opcion5Contador=0;
    var opcion6Contador=0;
    var opcionMenu=true;
     
    while(opcionMenu){
    var menu=Number(prompt("Elige una opción del Menú: \n opción1\n opción2\n opción3\n opción4\n opción5\n opción6\n opción salir7"))
        switch(parseInt(menu)){
            case 1: 
                function opcion1(){
                numeroUno = Number(prompt("Digite por favor el número Uno: "));
                numeroDos = Number(prompt("Digite por favor el número Dos: "));
                numeroUno = Number(prompt("Digite por favor el número Tres: "));
                
                if(numeroUno>numeroDos && numeroDos>numeroTres){
                console.log(`${numeroUno}`+`${numeroDos}`+`${numeroTres}`);
                console.log(`${numeroTres}`+`${numeroDos}`+`${numeroUno}`);
                     
                }else if(numeroDos>numeroUno && numeroUno>numeroTres){
                    console.log(`${numeroDos}`+`${numeroUno}`+`${numeroTres}`);
                    console.log(`${numeroTres}`+`${numeroUno}`+`${numeroDos}`);
                }
                else if(numeroTres>numeroUno && numeroUno>numeroDos){
                   console.log(`${numeroTres}`+`${numeroUno}`+`${numeroDos}`);
                   console.log(`${numeroDos}`+`${numeroUno}`+`${numeroTres}`);
                }
    
            opcion1Contador++;
            }
            opcion1();
            break;