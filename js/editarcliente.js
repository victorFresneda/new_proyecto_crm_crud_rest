
(function(){
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get('id'));

    console.log(idCliente);
})();