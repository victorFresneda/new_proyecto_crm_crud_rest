
import { obtenerCliente } from './API.js'; 

(function(){
    document.addEventListener('DOMContentLoaded', async () => {

        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        console.log(cliente);

    });
    
})();