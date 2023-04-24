import axios from 'axios';

// GET

axios
    .get('https://swapi.dev/api/people/1/')
    .then((respuesta) =>{
        console.log(respuesta)
    })
    .catch((error) => {
        console.log(error)
    });


// POST

axios.post('path', {email: 'loquesea'})
    .then((respuesta) => {
        console.log(respuesta)
    })
    .catch((error) => {
        console.log(error)
    })