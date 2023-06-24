const express = require('express');
const app = express();

app.use(express.static('public'));

/* app.get('/clientes', (req, res) => {
    res.send('clientes.html');
});

app.get('/empleados', (req, res) => {
    res.send('empleados');
}); */

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/error.html');
});

app.get('/detalleDeOrden', (req, res) => {
    res.send('detalleDeOrden');
});

app.get('/ordenes', (req, res) => {
    res.send('ordenes');
});

app.get('/productos', (req, res) => {
    res.send('productos');
});

app.listen(8080);