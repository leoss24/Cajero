import { cuentas } from './data.js';

window.onload = function () {
    // Obtener el valor del parámetro 'password' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("numeroCuenta").value = urlParams.get('numeroCuenta');
}

document.addEventListener("DOMContentLoaded", function(){
    var buttonConsulta = document.getElementById("buttonConsulta");
    buttonConsulta.addEventListener("click", consultaSaldo);
});

function consultaSaldo(){
    var saldo = document.getElementById("saldo");
    var numeroCuenta = document.getElementById("numeroCuenta").value
    var cuenta = cuentas.find((c) => c.numeroCuenta == numeroCuenta);
    saldo.value = cuenta.saldo
   
}

document.addEventListener("DOMContentLoaded", function(){
    var buttonIngresar = document.getElementById("buttonIngresar");
    buttonIngresar.addEventListener("click", ingresarSaldo);
});

function ingresarSaldo(){
    var ingreso = document.getElementById("ingreso").value;
    var numeroCuenta = document.getElementById("numeroCuenta").value
    var cuenta = cuentas.find((c) => c.numeroCuenta == numeroCuenta);
    cuenta.saldo = parseInt(cuenta.saldo) + parseInt(ingreso);
    document.getElementById("ingreso").value="";
    document.getElementById("saldo").value=cuenta.saldo
}

document.addEventListener("DOMContentLoaded", function(){
    var buttonRetirar = document.getElementById("buttonRetirar");
    buttonRetirar.addEventListener("click", retirarSaldo);
});

function retirarSaldo(){
    var retiro = document.getElementById("retiro").value;
    var numeroCuenta = document.getElementById("numeroCuenta").value
    var cuenta = cuentas.find((c) => c.numeroCuenta == numeroCuenta);
    cuenta.saldo = parseInt(cuenta.saldo) - parseInt(retiro);
    document.getElementById("retiro").value="";
    document.getElementById("saldo").value=cuenta.saldo
}
