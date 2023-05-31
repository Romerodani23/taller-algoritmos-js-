case 5: 
            function opcion5(){
            valorCompra = Number(prompt("Digite por favor el valor de la compra: "));
            cantidadProductos = Number(prompt("Digite por favor la cantidad de productos comprados: "));
            
            if(valorCompra>500000){
                valorIVA=valorCompra*0.19;
                valorTotalFinal=valorCompra
                console.log(`El valor de la compra es de : ${valorCompra}`);
                console.log(`Se le devuelve el valor del iVA (19%): ${valorIVA}`)
            }
            else if(valorCompra>1000000){
                valorIVA=valorCompra*0.19;
                valorTotalFinal=(valorCompra*0.90);
                console.log(`El valor de la compra menos el descuento del 10% es de : ${valorTotalFinal}`);
                console.log(`Se le devuelve el valor del iVA por que su compra es mayor a $500000 (19%): ${valorIVA}`)
            }
        opcion5Contador++;
        }
        opcion5();
        break;