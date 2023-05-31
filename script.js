
            case 2:
                function opcion2(){ 
            radio = Number(prompt("Digite por favor el radio de la circunferencia: "));
            area = pi *Math.pow(radio,2);
            console.log(`El área de la circunferencia es: ${area}`)
            
            opcion2Contador++;
            }
            opcion2();
            break;