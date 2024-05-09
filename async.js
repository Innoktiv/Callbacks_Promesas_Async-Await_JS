const fetchDataAsync = async () => {
    const url= 'https://jsonplaceholder.typicode.com/photos'; // URL en variable
    try {
        const response = await fetch(url); // Realiza solicitud a HTTP
        const data = await response.json(); // Convertir respuesta a JSON
        return data;
    } catch(error){
        console.error('Error al obtener los datos: ', error);
        throw error; // Lanzar el error para manejar en el código que llama a esta función
    }
};

const showFirstTwentyTitles = async () => {
    try {
        const data = await fetchDataAsync(); // Obtener datos usando la funcion
        data.slice(0, 20).forEach(item => {
            console.log(item.title); // Mostrar el titulo de cada item
        });
    } catch (error) {
        console.error('Error al mostrar los titulos: ', error);
    }
};

// Funcion promesa despues de 3 sec.

const delayedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información enviada');
        }, 3000); // Retorna "Info enviada luego de 3 secs"
    });
};

// Funcion asincrona para recibir el mensaje de la promesa creada

const getMessageFromPromise = async () => {
    try {
        const message = await delayedPromise(); // Obtener el mensaje de la promesa
        console.log(message); 
    } catch (error){
        console.error('Error al obtener el mensaje: ', error)
    }
};

showFirstTwentyTitles();
getMessageFromPromise();