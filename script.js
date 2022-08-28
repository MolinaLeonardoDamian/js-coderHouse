let compra = 0
let mesa = parseInt(
    prompt(
        'Bienvenido! ingrese su mesa 1, 2, 3, 4, 5'
    )
)

 let pedido = parseInt(
    prompt(
        'Arme su pedido: 1.PIZZA, 2.EMPANADAS, 3.BURGUER, 4.LOMITO, 5.COCACOLA, 6.SPRITE, 7.FANTA, 8.CERVEZA, 9.SODA, 10.AGUA'
    )
 )
 let seguirComprando = true
 let decisión1
 let decisión2
 let decisión3

 while (seguirComprando === true) {
    if (pedido === 1) {
        compra = compra + 900
    }
    else if (pedido === 2) {
        compra = compra + 750
    }
    else if (pedido === 3) {
        compra = compra + 800
    }
    else if (pedido === 4) {
        compra = compra + 900
    }
    else if (pedido === 5) {
        compra = compra + 250
    }
    else if (pedido === 6) {
        compra = compra + 250
    }
    else if (pedido === 7) {
        compra = compra + 250
    }
    else if (pedido === 8) {
        compra = compra + 500
    }
    else if (pedido === 9) {
        compra = compra + 200
    }
    else if (pedido === 10) {
        compra = compra + 200
    }
    
    decisión1 = parseInt(
        prompt(
        'Desea agregar mas comida? 1.SI, 2.NO'
        )
    )
    if (decisión1 === 1) {
        pedido = parseInt(
            prompt('Que desea agregar? 1.PIZZA, 2.EMPANADAS, 3.BURGUER, 4.LOMITO, 5.COCACOLA, 6.SPRITE, 7.FANTA, 8.CERVEZA, 9.SODA, 10.AGUA')
        )
    } else if (decisión1 === 2) {
        seguirComprando = false
    }

 }

 alert ('Mesa: ' +mesa +' El monto total en efectivo es: $' +compra)

function calcularDescuento(CompraDescuento){
let descuento = 0
if (CompraDescuento>=2000){
    descuento = 15
}
let valorDescuento = CompraDescuento *(descuento/100)
CompraDescuento = CompraDescuento - valorDescuento
return CompraDescuento
}
let valorConDescuento = calcularDescuento(compra)
alert ('El total con descuento es: ' +valorConDescuento)