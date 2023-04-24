// Arrow functions

const prueba1 = () => {
    return 'pepe';
}

const prueba2 = () => 'pepe';
prueba();


// FETCH


// Cómo hacer petición

fetch('https://swapi.dev/api/people/1/')
    .then( (response) => response.json())
    .then( (parsedInfo) => {
        console.log(parsedInfo);
    })
    .catch( (error) => {
        console.error(error);
    } )



const getCharacter = async () => {
    try {
        const info = await fetch('https://swapi.dev/api/people/1/');
        const character = await info.json();
        console.log(character);
    } catch (error) {
        console.log(error);
    }
}
getCharacter();



// Hacer petición con POST

const data = { email: 'elquesea@gmail.com'};

fetch('https://dominio.com/loquesea', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 8w49w398h3qrh389wher93q898erwhwi"
    },
    body: JSON.stringify(data)
})
    .then(respuesta => console.log(response))
    .catch(error => console.log(error))


    const postCharacter = async () => {
        try {
            const info = await fetch('https://dominio.com/loquesea', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 8w49w398h3qrh389wher93q898erwhwi"
                },
                body: JSON.stringify(data)
            });
            console.log(info);
        } catch (error) {
            console.log(error);
        }
    }