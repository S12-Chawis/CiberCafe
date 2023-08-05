let usuario = 'jaime@gmail.com' //El nombre del usuario que usaré es Jaime en vez de Andrea o Santiago
let contraseña = 'el dinero si da la felicidad'
let centinela1 = true
let user, password
let cuentaDeUsuario = 0
let limite = 3
let ultimaPregunta
let servicioDeseado
let precioServicio = 0, cantidadServicio = 0
let estudiante
let cuentaServicio1 = 0, cuentaServicio2 = 0, cuentaServicio3 = 0
let vrTotalServicio1 = 0, vrTotalServicio2 = 0, vrTotalServicio3 = 0


while (centinela1 == true) {
    cuentaDeUsuario++
    alert('Servicio #' + cuentaDeUsuario +
        '\nBienvenido al Ciber Cafe de la universidad')
    user = prompt("Por favor ingrese el usuario para poder acceder al servicio deseado, o presione 1 si desea salir")
    if (user == '1') {
        alert("Nuestros servicios se han cerrado, esperamos que vuelva pronto")
        cuentaDeUsuario--
        centinela1 = false
    } else {
        password = prompt("Por favor ingrese la contrasena del usuario")

        if (user == usuario && contraseña == password) {
            alert("Jaime" + "\nBienvenido, usted acaba de acceder al sistema, a continuación se le presentan los servicios que ofrecemos")
            servicioDeseado = parseInt(prompt("Jaime" + "\nLos servicios que nosotros prestamos son los siguientes, por favor seleccione el número del servicio que desea:" +
                '\n1: -Servicio de fotocopiado' +
                '\n2: -Servicio de impresión' +
                '\n3: -Servicio de internet' +
                '\n4: -Salir'))

            switch (servicioDeseado) {
                case 1:
                    cuentaServicio1++
                    alert("Jaime" + "\nUsted eligió el servicio de fotocopiado")
                    precioServicio = parseFloat(prompt("Por favor ingrese el valor del servicio"))
                    estudiante = prompt("Jaime" + "\n¿Usted es estudiante? Por favor responda si o no")

                    if (estudiante == "si") {
                        precioServicio = precioServicio - precioServicio * 0.05
                        alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)

                    } else if (estudiante == "no") {
                        alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                    } else {
                        let centinela2 = true
                        while (centinela2 == true) {
                            alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                            estudiante = prompt("Jaime" + "\nUsted es estudiante?")

                            if (estudiante == "si") {
                                precioServicio = precioServicio * 0.05 + precioServicio
                                alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)
                                centinela2 = false
                            } else if (estudiante == "no") {
                                alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                                centinela2 = false
                            }
                        }
                    }
                    vrTotalServicio1 = vrTotalServicio1 + precioServicio
                    ultimaPregunta = prompt("Jaime" + "\n¿Desea voler a prestar otro servicio? Responda si o no")
                    centinela3 = true
                    if (ultimaPregunta == "si") {
                        centinela3 = false
                    } else if (ultimaPregunta == "no") {
                        alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                        centinela1 = false
                        centinela3 = false
                    } else {
                        while (centinela3 == true) {
                            alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                            ultimaPregunta = prompt("Jaime" + "\n¿Desea volver a prestar un servicio?")

                            if (ultimaPregunta == "si") {
                                centinela3 = false
                            } else if (ultimaPregunta == "no") {
                                alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                centinela1 = false
                                centinela3 = false
                            }
                        }
                    }
                    break
                case 2:
                    cuentaServicio2++
                    alert("Jaime" + "\nUsted eligió el servicio de impresión")
                    precioServicio = parseFloat(prompt("Por favor ingrese el valor del servicio"))
                    estudiante = prompt("Jaime" + "\n¿Usted es estudiante? Por favor responda si o no")

                    if (estudiante == "si") {
                        precioServicio = precioServicio - precioServicio * 0.05
                        alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)

                    } else if (estudiante == "no") {
                        alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                    } else {
                        let centinela2 = true
                        while (centinela2 == true) {
                            alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                            estudiante = prompt("Jaime" + "\n¿Usted es estudiante?")

                            if (estudiante == "si") {
                                precioServicio = precioServicio * 0.05 + precioServicio
                                alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)
                                centinela2 = false
                            } else if (estudiante == "no") {
                                alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                                centinela2 = false
                            }
                        }
                    }
                    vrTotalServicio2 = vrTotalServicio2 + precioServicio
                    ultimaPregunta = prompt("Jaime" + "\n¿Desea voler a prestar otro servicio? Responda si o no")
                    centinela3 = true
                    if (ultimaPregunta == "si") {
                        centinela3 = false
                    } else if (ultimaPregunta == "no") {
                        alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                        centinela1 = false
                        centinela3 = false
                    } else {
                        while (centinela3 == true) {
                            alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                            ultimaPregunta = prompt("Jaime" + "\n¿Desea volver a prestar un servicio?")

                            if (ultimaPregunta == "si") {
                                centinela3 = false
                            } else if (ultimaPregunta == "no") {
                                alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                centinela1 = false
                                centinela3 = false
                            }
                        }
                    }
                    break
                case 3:
                    cuentaServicio3++
                    alert("Jaime" + "\nUsted eligió el servicio de internet")
                    precioServicio = parseFloat(prompt("Jaime" + "\nPor favor ingrese el valor del servicio"))
                    estudiante = prompt("Jaime" + "\n¿Usted es estudiante? Por favor responda si o no")

                    if (estudiante == "si") {
                        precioServicio = precioServicio - precioServicio * 0.05
                        alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)

                    } else if (estudiante == "no") {
                        alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                    } else {
                        let centinela2 = true
                        while (centinela2 == true) {
                            alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                            estudiante = prompt("¿Usted es estudiante?")

                            if (estudiante == "si") {
                                precioServicio = precioServicio * 0.05 + precioServicio
                                alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)
                                centinela2 = false
                            } else if (estudiante == "no") {
                                alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                                centinela2 = false
                            }
                        }
                    }
                    vrTotalServicio3 = vrTotalServicio3 + precioServicio
                    ultimaPregunta = prompt("Jaime" + "\n¿Desea voler a prestar otro servicio? Responda si o no")
                    centinela3 = true
                    if (ultimaPregunta == "si") {
                        centinela3 = false
                    } else if (ultimaPregunta == "no") {
                        alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                        centinela1 = false
                        centinela3 = false
                    } else {
                        while (centinela3 == true) {
                            alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                            ultimaPregunta = prompt("¿Desea volver a prestar un servicio?")

                            if (ultimaPregunta == "si") {
                                centinela3 = false
                            } else if (ultimaPregunta == "no") {
                                alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                centinela1 = false
                                centinela3 = false
                            }
                        }
                    }
                    break
                case 4:
                    centinela1 = false
                    break
            }
        } else if (user == usuario && contraseña != password) {
            for (let i = 1; i < 3; i++) {
                limite--
                alert("La contraseña es incorrecta, tiene " + limite + " intentos mas para acceder, al llegar al tercer intento fallido se bloqueará el sistema")
                password = prompt("Por favor ingrese la contrasena del usuario nuevamente")
                if (contraseña == password) {
                    i = + 3 //Este puede ser un error de lógica
                    alert("Jaime" + "\nBienvenido, usted acaba de acceder al sistema, a continuación se le presentan los servicios que ofrecemos")
                    servicioDeseado = parseInt(prompt("Jaime" + "\nLos servicios que nosotros prestamos son los siguientes, por favor seleccione el número del servicio que desea:" +
                        '\n1: -Servicio de fotocopiado' +
                        '\n2: -Servicio de impresión' +
                        '\n3: -Servicio de internet' +
                        '\n4: -Salir'))

                    switch (servicioDeseado) {
                        case 1:
                            cuentaServicio1++
                            alert("Jaime" + "\nUsted eligió el servicio de fotocopiado")
                            precioServicio = parseFloat(prompt("Por favor ingrese el valor del servicio"))
                            estudiante = prompt("Jaime" + "\n¿Usted es estudiante? Por favor responda si o no")

                            if (estudiante == "si") {
                                precioServicio = precioServicio - precioServicio * 0.05
                                alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)

                            } else if (estudiante == "no") {
                                alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                            } else {
                                let centinela2 = true
                                while (centinela2 == true) {
                                    alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                                    estudiante = prompt("Jaime" + "\nUsted es estudiante?")

                                    if (estudiante == "si") {
                                        precioServicio = precioServicio * 0.05 + precioServicio
                                        alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)
                                        centinela2 = false
                                    } else if (estudiante == "no") {
                                        alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                                        centinela2 = false
                                    }
                                }
                            }
                            vrTotalServicio1 = vrTotalServicio1 + precioServicio
                            ultimaPregunta = prompt("Jaime" + "\n¿Desea voler a prestar otro servicio? Responda si o no")
                            centinela3 = true
                            if (ultimaPregunta == "si") {
                                centinela3 = false
                                centinela1 = true
                            } else if (ultimaPregunta == "no") {
                                alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                centinela1 = false
                                centinela3 = false
                            } else {
                                while (centinela3 == true) {
                                    alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                                    ultimaPregunta = prompt("Jaime" + "\n¿Desea volver a prestar un servicio?")

                                    if (ultimaPregunta == "si") {
                                        centinela3 = false
                                        centinela1 = true
                                    } else if (ultimaPregunta == "no") {
                                        alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                        centinela1 = false
                                        centinela3 = false
                                    }
                                }
                            }
                            break
                        case 2:
                            cuentaServicio2++
                            alert("Jaime" + "\nUsted eligió el servicio de impresión")
                            precioServicio = parseFloat(prompt("Por favor ingrese el valor del servicio"))
                            estudiante = prompt("Jaime" + "\n¿Usted es estudiante? Por favor responda si o no")

                            if (estudiante == "si") {
                                precioServicio = precioServicio - precioServicio * 0.05
                                alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)

                            } else if (estudiante == "no") {
                                alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                            } else {
                                let centinela2 = true
                                while (centinela2 == true) {
                                    alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                                    estudiante = prompt("Jaime" + "\n¿Usted es estudiante?")

                                    if (estudiante == "si") {
                                        precioServicio = precioServicio * 0.05 + precioServicio
                                        alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)
                                        centinela2 = false
                                    } else if (estudiante == "no") {
                                        alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                                        centinela2 = false
                                    }
                                }
                            }
                            vrTotalServicio2 = vrTotalServicio2 + precioServicio
                            ultimaPregunta = prompt("Jaime" + "\n¿Desea voler a prestar otro servicio? Responda si o no")
                            centinela3 = true
                            if (ultimaPregunta == "si") {
                                centinela3 = false
                                centinela1 = true
                            } else if (ultimaPregunta == "no") {
                                alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                centinela1 = false
                                centinela3 = false
                            } else {
                                while (centinela3 == true) {
                                    alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                                    ultimaPregunta = prompt("Jaime" + "\n¿Desea volver a prestar un servicio?")

                                    if (ultimaPregunta == "si") {
                                        centinela3 = false
                                        centinela1 = true
                                    } else if (ultimaPregunta == "no") {
                                        alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                        centinela1 = false
                                        centinela3 = false
                                    }
                                }
                            }
                            break
                        case 3:
                            cuentaServicio3++
                            alert("Jaime" + "\nUsted eligió el servicio de internet")
                            precioServicio = parseFloat(prompt("Jaime" + "\nPor favor ingrese el valor del servicio"))
                            estudiante = prompt("Jaime" + "\n¿Usted es estudiante? Por favor responda si o no")

                            if (estudiante == "si") {
                                precioServicio = precioServicio - precioServicio * 0.05
                                alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)

                            } else if (estudiante == "no") {
                                alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                            } else {
                                let centinela2 = true
                                while (centinela2 == true) {
                                    alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                                    estudiante = prompt("¿Usted es estudiante?")

                                    if (estudiante == "si") {
                                        precioServicio = precioServicio * 0.05 + precioServicio
                                        alert("Jaime" + "\nUsted tiene derecho a un 5% de descuento sobre el valor de su compra, por lo cual su monto a pagar es $" + precioServicio)
                                        centinela2 = false
                                    } else if (estudiante == "no") {
                                        alert("Jaime" + "\nUsted no tendrá descuento al no ser estudiante, por lo cual su monto a pagar es $" + precioServicio + ", muchas gracias por prestar nuestros servicios")
                                        centinela2 = false
                                    }
                                }
                            }
                            vrTotalServicio3 = vrTotalServicio3 + precioServicio
                            ultimaPregunta = prompt("Jaime" + "\n¿Desea voler a prestar otro servicio? Responda si o no")
                            centinela3 = true
                            if (ultimaPregunta == "si") {
                                centinela3 = false
                                centinela1 = true
                            } else if (ultimaPregunta == "no") {
                                alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                centinela1 = false
                                centinela3 = false
                            } else {
                                while (centinela3 == true) {
                                    alert("Jaime" + '\nPor favor ingrese "si" o "no" según su respuesta')
                                    ultimaPregunta = prompt("¿Desea volver a prestar un servicio?")

                                    if (ultimaPregunta == "si") {
                                        centinela3 = false
                                        centinela1 = true
                                    } else if (ultimaPregunta == "no") {
                                        alert("Jaime" + "\nNuestros servicios se han cerrado, esperamos que vuelva pronto")
                                        centinela1 = false
                                        centinela3 = false
                                    }
                                }
                            }
                            break
                        case 4:
                            centinela1 = false
                            break
                    }
                }
            }
            if (limite == 1) {
                centinela1 = false
            }

        } else if (user != usuario) {
            alert("El usuario que ingresó no es correcto, por favor verifique los datos")
            cuentaDeUsuario--
        } else {
            alert("Verifique los datos")
            cuentaDeUsuario--
        }
    }
}

if (cuentaDeUsuario < 1) {
    alert("No se prestó ningún servicio el día de hoy, por lo cuál no hay datos por mostrar")
} else {
    alert("Ya no se prestarán mas servicios en el día de hoy, por lo cual encontrá una lista con los datos requeridos que se recopilaron durante el día (mirar consola)")

    console.log("La cantidad de servicios de fotocopiado que se prestaron es: " + cuentaServicio1)
    console.log("La cantidad de servicios de impresion que se prestaron es: " + cuentaServicio2)
    console.log("La cantidad de servicios de internet que se prestaron es: " + cuentaServicio3)
    console.log("El valor total de todos los servicios de fotocopiado que se prestaron es: " + vrTotalServicio1)
    console.log("El valor total de todos los servicios de impresion que se prestaron es: " + vrTotalServicio2)
    console.log("El valor total de todos los servicios de internet que se prestaron es: " + vrTotalServicio3)

    let promedioFotocopia = (cuentaServicio1 + cuentaServicio2 + cuentaServicio3) / cuentaServicio1
    let promedioImpresion = (cuentaServicio1 + cuentaServicio2 + cuentaServicio3) / cuentaServicio2
    let promedioInternet = (cuentaServicio1 + cuentaServicio2 + cuentaServicio3) / cuentaServicio3
    let promedioPrecioFotocopia = (vrTotalServicio1 + vrTotalServicio2 + vrTotalServicio3) / cuentaServicio1
    let promedioPrecioImpresion = (vrTotalServicio1 + vrTotalServicio2 + vrTotalServicio3) / cuentaServicio2
    let promedioPrecioInternet = (vrTotalServicio1 + vrTotalServicio2 + vrTotalServicio3) / cuentaServicio3
    console.log("El promedio de los servicios de fotocopia prestados es de " + promedioFotocopia + ", y el promedio de precios es: $" + promedioPrecioFotocopia)
    console.log("El promedio de los servicios de impresión prestados es de " + promedioImpresion + ", y el promedio de precios es: $" + promedioPrecioImpresion)
    console.log("El promedio de los servicios de Internet prestado es de " + promedioInternet + ", y el promedio de precios es: $" + promedioPrecioInternet)

}