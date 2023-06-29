const express = require('express');
const hbs = require('hbs');
const clienteService = require('./services/clientesService');
const empleadoService = require('./services/empleadoService');
const Cliente = require('./models/clientes');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/clientes', (req, res) => {
    res.render('clientes', {
        titulo: 'Clientes',
        arregloClientes: clienteService.leerTodo('customers')
    });
});

/* app.get('/formularioInsertarClientes', (req, res) => {
    res.render('formularioCliente');
}); */

app.get('/insertarCliente', (req, res) => {
    const identificador = req.query.txtIdentificador;
    const nombreCompania = req.query.txtNombreDeCompania;
    const nombreContacto = req.query.txtNombreDeContacto;
    const cliente = new Cliente(identificador, nombreCompania, nombreContacto);
    clienteService.insertar(cliente);
    res.render('clientes', {
        titulo: 'Clientes',
        arregloClientes: clienteService.leerTodo('customers')
    });
});

app.get('/empleados', (req, res) => {
    res.render('empleados', {
        titulo: 'Empleados',
        arregloEmpleados: empleadoService.leerTodo('employees')
    });
});

app.get('/detalleDeOrden', (req, res) => {
    res.render('detalleDeOrden', {
        titulo: 'Detalle de orden'
    });
});

app.get('/ordenes', (req, res) => {
    res.render('ordenes', {
        titulo: 'Órdenes'
    });
});

app.get('/productos', (req, res) => {
    res.render('productos', {
        titulo: 'Productos'
    });
});

app.listen(8080);