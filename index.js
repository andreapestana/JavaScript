// Calcular el costo de una salida a una discoteca de la ciudad dependiendo el dia y el lugar de la discoteca

// Discotecas

class Discoteca {
    constructor(nombre,barrio,cover){
        this.nombre = nombre
        this.barrio = barrio
        this.cover = cover
    }
}

const laChula = new Discoteca("La chula","Las palmas",5000)
const teatroVictoria = new Discoteca("Teatro Victoria","Poblado",15000)
const laHouse = new Discoteca("La House","Poblado",5000)
const laTerraza = new Discoteca("La Terraza","Laureles",5000)

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
    constructor(nombreDia,multi){
        this.nombreDia = nombreDia
        this.multi = multi
    }
}

const viernes = new Dia('Viernes',2)
const sabado = new Dia('Sabado',3)
const domingo = new Dia('Domingo',1)

let DiaDeseado = parseInt(prompt("Ingresa el dia que quieres ir a la discoteca 1.Viernes- 2. Sabado- 3. Domingo"))

let escogioDia = false

//Variable info del dia

let infoDiaDeseado

while (escogioDia === false) {
    if (DiaDeseado === 1) {
        escogioDia = true
        infoDiaDeseado = viernes
    } else if (DiaDeseado === 2) {
        escogioDia = true
        infoDiaDeseado = sabado
    } else if (DiaDeseado === 3) {
        escogioDia = true
        infoDiaDeseado = domingo
    } else {
    DiaDeseado = parseInt(
        prompt(
            "Ingrese nuevamente el dia que quisiera ir a la discoteca. 1.Viernes- 2. Sabado- 3. Domingo"
        )
     )}
        
  }

const coverFinal = calcularCosto(infoDiaDeseado.multi, infoDiscotecaDeseada.cover)

//funcion calcular costos dependiendo el cover de la discoteca y el dia.
function calcularCosto(cover,dia){
    const costo = (cover*dia)
    return costo
}

alert (`El cover en ${infoDiscotecaDeseada.nombre} son: ${coverFinal}`)


