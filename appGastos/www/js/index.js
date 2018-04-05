//Declaracion de variables globales.
var saldoTotal;
var gastosAMostrarStorage;

var fechaGlobal = new Date();
var horaActual = fechaGlobal.getHours() + ":" + fechaGlobal.getMinutes();
var diaActual = fechaGlobal.getDay() + "/" + fechaGlobal.getMonth() + "/" + fechaGlobal.getFullYear();

var sueldoIngresado;
var billeteraIngresado;
var bancoIngresado;

var costoCompraIngresado;
var nombreCompraIngresado;
var categoriaCompraIngresado;
var diaDeCompraIngresado;

/* Objetos */
var gastosTotal = {
    "categoria": ["Supermercado", "Kiosco", "Transporte", "Comida Trabajo"],
    "nombre": ["Generales", "Tabaco", "Taxi", "Alta Mila"],
    "costo": ["540", "60", "146", "85"],
    "diaDeCompra": ["22/12", "22/12", "21/12", "20/12"]
};
var mostrarGastosTotal = {
    "catArr": [],
    "nomArr": [],
    "cosArr": [],
    "diaArr": []
}
var fijosTotal = {
    "tarjeta": ["", "", "", ""],
    "nombreGasto": ["", "", "", ""],
    "monto": ["", "", "", ""],
    "cuota": ["", "", "", ""]
}
var mostrarFijosTotal = {
    "tarArr": [],
    "nomFijArr": [],
    "monArr": [],
    "cuoArr": []
}



////////////////Algoritmo Divisor de Cuentas///////////////////




/*var myObj, i, j, x = "";
myObj = {
    "nombres":"",
    "gastos":0,
    "": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
}

for (i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j] + "<br>";
    }
}*/

myArr = [{}];




document.getElementById("demo").innerHTML = x;
var cantUsuarios;
var cantUsuariosArr = [];
var nombresUsuariosArr = [];
var nuevoGasto;

function TomarCantidadDeUsuarios() {
    //Creo array con la cantidad de usuarios deseados
    cantUsuarios = parseInt(document.getElementById('cantidadDeUsuarios123').value);
    for (i = 0; i <= cantUsuarios; i++) {
        cantUsuariosArr.push(i);
        //console.log(cantUsuariosArr[i]);
    }

    //Creo dinamicamente inputs para colocar los nombres de los usuarios
    for (i = 0; i < cantUsuariosArr.length; i++) {
        document.getElementById("mostrarCantUsuarios").innerHTML += '<div class="input-group" style="margin-bottom:30px;"><span class="input-group-btn"><button class="btn btn-default"type="button">Nombre:</button></span> <input type="text" class="form-control" id="nombreUsuario' + [i] + '"></div>';
    }
    $('#tomaDeCantidadDeUsuarios').hide();
    $('#cargaDeNombresDeUsuarios').show();
}

function TomarNombresDeUsuarios() {
    for (i = 0; i < cantUsuariosArr.length; i++) {
        nombresUsuariosArr.push(document.getElementById('nombreUsuario' + [i] + '').value);
    }
    console.log(nombresUsuariosArr);

    ImprimirNombresDeUsuarios();
    $('#cargaDeNombresDeUsuarios').hide();
    $('#mostrarListaDivisor').show();
}

function ImprimirNombresDeUsuarios() {
    for (i = 0; i < nombresUsuariosArr.length; i++) {
        document.getElementById("listaInformacionDivisor").innerHTML += "<tr><td>" + nombresUsuariosArr[i] + "</td></tr>";
        document.getElementById("nombresAMostrarEnDropDown").innerHTML += '<li> <a href="#">' + nombresUsuariosArr[i] + '</a></li>';
    }
}

function CargarNuevoGasto() {
    nuevoGasto = parseInt(document.getElementById('costoComproDivisor').value);
    document.getElementById("listaInformacionDivisor").innerHTML += "<tr><td>" + nombresUsuariosArr[i] + "</td><td>" + nuevoGasto + "</td></tr>";





}

////////////////Algoritmo Divisor de Cuentas///////////////////



//Funcion para calcular el total de ACTIVOS del usuario.
function CalcularSaldoInicial() {
    sueldoIngresado = parseInt(document.getElementById('sueldoIngresado').value);
    billeteraIngresado = parseInt(document.getElementById('billeteraIngresado').value);
    bancoIngresado = parseInt(document.getElementById('bancoIngresado').value);

    saldoTotal = sueldoIngresado + billeteraIngresado + bancoIngresado;

    console.log(saldoTotal);
    document.getElementById("mostrarSaldo").innerHTML = "Tu saldo actual es de: " + saldoTotal;
}

function CargarCompra(gastosAMostrarStorage) {

    costoCompraIngresado = parseInt(document.getElementById('costoCompra').value);
    nombreCompraIngresado = document.getElementById('nombreCompra').value;
    categoriaCompraIngresado = document.getElementById('categoriaCompra').value;
    diaDeCompraIngresado = parseInt(document.getElementById('diaDeCompra').value);

    function setNuevoGasto(categoriaCompraIngresado, nombreCompraIngresado, costoCompraIngresado, diaDeCompraIngresado) {
        this.categoriaCompraIngresado = categoriaCompraIngresado;
        this.nombreCompraIngresado = nombreCompraIngresado;
        this.costoCompraIngresado = costoCompraIngresado;
        this.diaDeCompraIngresado = diaDeCompraIngresado;
    }

    function almacenarGastos(categoriaCompraIngresado, nombreCompraIngresado, costoCompraIngresado, diaDeCompraIngresado, gastosAMostrarStorage) {
        gastosTotal.categoria.push(categoriaCompraIngresado);
        gastosTotal.nombre.push(nombreCompraIngresado);
        gastosTotal.costo.push(costoCompraIngresado);
        /* gastosTotal.diaDeCompra.push(diaDeCompraIngresado); */
        gastosAMostrarStorage = gastosTotal;
        localStorage.setItem("gastosAMostrarStorage", JSON.stringify(gastosAMostrarStorage));

        /*  document.getElementById().innerHTML =  */
        console.log(gastosAMostrarStorage);
    }
    //Creo nueva linea dentro de la tabla
    var nuevoGasto = new setNuevoGasto(categoriaCompraIngresado, nombreCompraIngresado, costoCompraIngresado, diaDeCompraIngresado);
    document.getElementById("mostrarLista").innerHTML +=
        "<tr><td>" + nuevoGasto.categoriaCompraIngresado +
        "</td><td>" + nuevoGasto.nombreCompraIngresado +
        "</td><td>" + nuevoGasto.costoCompraIngresado +
        "</td><td>" + nuevoGasto.diaDeCompraIngresado + "</td></tr>";


    almacenarGastos(categoriaCompraIngresado, nombreCompraIngresado, costoCompraIngresado, diaDeCompraIngresado);
    sumarGastos(gastosTotal);
    TomarCantidadDeUsuarios();
}

function CargarFijo() {

    var nombreBancoFijoIngresado = document.getElementById('tarjetaFijo').value;
    var nombreGastoFijoIngresado = document.getElementById('nombreGastoFijo').value;
    var montoFijoIngresado = parseInt(document.getElementById('montoFijo').value);
    var cuotaFijoIngresado = parseInt(document.getElementById('cuotaFijo').value);

    function setNuevoFijo(nombreBancoFijoIngresado, nombreGastoFijoIngresado, montoFijoIngresado, cuotaFijoIngresado) {
        this.nombreBancoFijoIngresado = nombreBancoFijoIngresado;
        this.nombreGastoFijoIngresado = nombreGastoFijoIngresado;
        this.montoFijoIngresado = montoFijoIngresado;
        this.cuotaFijoIngresado = cuotaFijoIngresado;
    }

    function almacenarFijos(nombreBancoFijoIngresado, nombreGastoFijoIngresado, montoFijoIngresado, cuotaFijoIngresado) {
        fijosTotal.tarjeta.push(nombreBancoFijoIngresado);
        fijosTotal.nombreGasto.push(nombreGastoFijoIngresado);
        fijosTotal.monto.push(montoFijoIngresado);
        fijosTotal.cuota.push(cuotaFijoIngresado);
        console.log(fijosTotal);
    }

    function sumarFijos(fijosTotal) {
        var fijosSumados = 0;
        var fijosDeArray = fijosTotal.monto;
        for (var i = 0; i < parseInt(fijosDeArray.length); i++) {
            fijosSumados += fijosDeArray[i];
        }
        document.getElementById("mostrarTotalLista").innerHTML = "Total: " + fijosSumados;
        /* document.getElementById("mostrarTotalLista").innerHTML += "Total: " + gastosSumados;   */
        console.log(fijosSumados);
    }


    var nuevoFijo = new setNuevoFijo(nombreBancoFijoIngresado, nombreGastoFijoIngresado, montoFijoIngresado, cuotaFijoIngresado);
    document.getElementById("mostrarLista").innerHTML +=
        "<tr><td>" + nuevoFijo.nombreBancoFijoIngresado +
        "</td><td>" + nuevoFijo.nombreGastoFijoIngresado +
        "</td><td>" + nuevoFijo.montoFijoIngresado +
        "</td><td>" + nuevoFijo.cuotaFijoIngresado + "</td></tr>";

    almacenarFijos(nombreBancoFijoIngresado, nombreGastoFijoIngresado, montoFijoIngresado, cuotaFijoIngresado);
    sumarFijos(fijosTotal);
}

function sumarGastos(gastosTotal) {
    var gastosSumados = 0;
    var gastosDeArray = gastosTotal.costo;
    for (var i = 0; i < parseInt(gastosDeArray.length); i++) {
        gastosSumados += gastosDeArray[i];
    }
    document.getElementById("mostrarTotalLista").innerHTML = "Total: " + gastosSumados;
    /* document.getElementById("mostrarTotalLista").innerHTML += "Total: " + gastosSumados;   */
    console.log(gastosSumados);
}

function mostrarGastos(gastosAMostrarStorage) {

    var gastosAMostrarStorageAlternativo = localStorage.getItem(gastosAMostrarStorage)
    gastosAMostrarStorage = JSON.parse(gastosAMostrarStorageAlternativo);
    console.log(gastosAMostrarStorage);
}















