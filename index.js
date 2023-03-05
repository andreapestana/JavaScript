// Calcular el costo de una salida a una discoteca de la ciudad dependiendo el dia y el lugar de la discoteca

// Discotecas

class Discoteca {
    constructor(nombre,barrio,cover){
        this.nombre = nombre
        this.barrio = barrio
        this.cover = cover
    }
}

const laChula = new Discoteca("La chula","Las palmas","5000")
const teatroVictoria = new Discoteca("Teatro Victoria","Poblado","15000")
const laHouse = new Discoteca("La House","Poblado","5000")
const laTerraza = new Discoteca("La Terraza","Laureles","5000")

let discotecaDeseada = parseInt(
    prompt("Escoge la discoteca a la que quieres ir. 1.La chula- 2.Teatro Victoria- 3.La House- 4.La terraza"
    )
)
//Variable escoger discoteca
let escogioDiscoteca = false

//Variable info de la discoteca

let infoDiscotecaDeseada

while (escogioDiscoteca === false) {
    if (discotecaDeseada === 1) {
        escogioDiscoteca = true
        infoDiscotecaDeseada = laChula
    } else if (discotecaDeseada === 2) {
        escogioDiscoteca = true
        infoDiscotecaDeseada = teatroVictoria
    } else if (discotecaDeseada === 3) {
        escogioDiscoteca = true
        infoDiscotecaDeseada = laHouse
    } else if (discotecaDeseada === 4) {
        escogioDiscoteca = true
        infoDiscotecaDeseada = laTerraza
 } else {
    discotecaDeseada = parseInt(
        prompt(
            "Vuelva a escoger la discoteca que mejor se ajusta a tu presupuesto? 1.La chula- 2.Teatro Victoria- 3.La House- 4.La terraza"
        )
     )
        
  }
}

// Dia en los que las discotecas abren
class Dia {
    constructor(viernes,sabado,domingo){
        this.viernes = viernes
        this.sabado = sabado
        this.domingo = domingo
    }
}

const viernes = new Dia(2.0)
const sabado = new Dia(3.0)
const domingo = new Dia(1.0)

const diaEscogido = parseInt(prompt("Ingresa el dia que quieres ir a la discoteca 1.Viernes- 2. Sabado- 3. Domingo"))

let escogioDia = false

//Variable info del dia

let infoDiaDeseado

while (escogioDia === false) {
    if (DiaDeseado === 1) {
        escogioDia = true
        infoDiaDeseado = viernes
    } else if (DiaDeseada === 2) {
        escogioDia = true
        infoDiaDeseado = sabado
    } else if (DiaDeseado === 3) {
        escogioDia = true
        infoDiaDeseado = domingo
    DiaDeseado = parseInt(
        prompt(
            "Ingrese nuevamente el dia que quisiera ir a la discoteca. 1.Viernes- 2. Sabado- 3. Domingo"
        )
     )
        
  }
}

const coverViernes = calcularCosto(diaEscogido, discotecaDeseada, 2.0)
const coverSabado = calcularCosto(diaEscogido, discotecaDeseada, 3.0)
const coverDomingo = calcularCosto(diaEscogido, discotecaDeseada, 1.0)


//funcion calcular costos dependiendo el cover de la discoteca y el dia.
function calcularCosto(cover,dia){
    const costo = (cover*dia)
    return costo
}

alert(`El cover en ${infoDiscotecaDeseada} son: 1. ${coverViernes} el viernes- 2. ${coverSabado} el sabado- 3.${coverDomingo} el domingo`)


