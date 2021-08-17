const url = 'http://localhost:4000/clientes';


export const nuevoCliente = cliente => {

    try {
        fetch(url, {
            method: 'POST',
            body:   JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }

        });

        window.location.href = 'index.html';
        
    } catch (error) {

        console.log(error);
        
    }
}


//Obtener todos los clientes 

export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {

        console.log(error);
        
    }
}

