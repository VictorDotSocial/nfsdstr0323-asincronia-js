// CALLBACK

function sayHello(personName, sayGoodbye) {
    console.log(personName)

    sayGoodbye()
}


sayHello('Pepe', () => { console.log('Adiós') })



// PROMESAS

const miFuncionAsincronaConPromesas = (nombre, apellido) => {
    const nombreCompleto = nombre + apellido;
    console.log('Ejecutando');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!nombre || !apellido) {
                reject('Se ha producido un error. Debes indicar nombre y apellido');
            } else {
                resolve(nombreCompleto);
            }
        }, 3000)
    });
}


miFuncionAsincronaConPromesas(null, 'Pedro')
    .then((resultado) => {
        console.log('Resultado', resultado);
        const person = resultado.data[4].name;

        moonAge = person.age * 0.4;
    })
    .catch((error) => {
        console.log('ERROR', error);
    })



// ASYNC AWAIT

const obtenerNombreCompleto = async () => {
    try {
        const resultado = await miFuncionAsincronaConPromesas('Nombre', null);
    
        console.log('RESULTADO NUEVO', resultado);
        return resultado;
    } catch (error) {
        console.log('ERROR', error);
        // Enviar un mail al administrado alertando
    }
}

const nombreCompleto = obtenerNombreCompleto();