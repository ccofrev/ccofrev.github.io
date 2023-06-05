let notas = [6, 8, 9, 2, 5, 10];

let suma = (arrNotas) => {
    salida = 0
    for (let i = 0; i < arrNotas.length; i++)
        salida = salida + arrNotas[i];
    return salida;
}

let promedio = (sumador, arrNotas) => {
    return sumador(arrNotas) / arrNotas.length;
}

alert("Las notas son: " + notas + "\nLa suma es: " + suma(notas) + "\nEl promedio es: " + promedio(suma, notas));