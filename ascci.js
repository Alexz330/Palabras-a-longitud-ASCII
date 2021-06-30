var tamañoAscci = 0


let listaAscii = []
let arregloNombres = ['alxis', 'eddy lopez', 'A', 'Mirna lopez']
let arreglopalabra = []

const sumaAscii = (cadena) => {
   
    for (let i = 0; i < cadena.length; i++) {
        // console.log(`El carácter ascci en el índice ${i} es '` + cadena.charCodeAt(i) + "'")
        tamañoAscci = tamañoAscci + parseInt(cadena.charCodeAt(i))
    }
    // console.log(`suma de todo el codigo ascci es ${String(tamañoAscci)}`)
}


const stringAnumeros = (arreglo) => {

    for (let i = 0; i < arreglo.length; i++) {
        let tmp = arreglo[i]
        sumaAscii(tmp)
        // console.log(tmp)
        listaAscii.push(tamañoAscci)
        tamañoAscci = 0
    }

    for (var x = 0; x < listaAscii.length; x++) {

        arreglopalabra.push(
            {
                palabra: {
                    string: arregloNombres[x],
                    tamañoAscci: listaAscii[x]
                }


            }
        )


    }

    return arreglo
}

stringAnumeros(arregloNombres)

const ordenmaiento = () => {
    let listaIncersion = arreglopalabra
    const tamañoLista = listaIncersion.length

    for (let i = 1; i < tamañoLista; i++) {

        let elemento = listaIncersion[i];
        let j = i - 1;

        while (j > -1 && elemento['palabra']['tamañoAscci'] < listaIncersion[j]['palabra']['tamañoAscci']) {
            console.log('a perro traes el ommtrix')
            listaIncersion[j + 1] = listaIncersion[j];
            j--;
            
        }

        listaIncersion[j + 1] = elemento;
       
    }

    console.log(listaIncersion)

}

ordenmaiento(arreglopalabra)
























// const palabra = [
    
//      {
//             string: 'alexis',
//             tamañoLista: 43
//         }
    
// ]
// let valor = parseInt('alexis')

// if (Number.isNaN(valor)) {
//     console.log('no soy un numero')
    
// } else {
//     console.log(`${valor}`)
// }



// const lista2 = [
//     { string: 'Mirna lopez', tamañoAscci: 3822 },
//     { string: 'eddy lopez', tamañoAscci: 1654 },
//     { string: 'alexis', tamañoAscci: 646 },

//     { string: 'Tulio Lopez', tamañoAscci: 2733 },

// ]

// console.log(lista2)