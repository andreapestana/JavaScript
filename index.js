// Calcular el costo de una salida a una discoteca de la ciudad dependiendo el dia y el lugar de la discoteca

// Discotecas

class Discoteca {
    constructor(id,nombre,barrio,cover){
        this.id = id
        this.nombre = nombre
        this.barrio = barrio
        this.cover = cover
    }
}

const discotecas = [ 
    new Discoteca( 1,"La chula","Las palmas",5000),
    new Discoteca(2,"Teatro Victoria","Poblado",15000),
    new Discoteca(3,"La House","Poblado",5000),
    new Discoteca(4,"La Terraza","Laureles",5000)

]

let discotecaDeseada = parseInt(
    prompt("Escoge la discoteca a la que quieres ir. 1.La chula- 2.Teatro Victoria- 3.La House- 4.La terraza"
    )
)
//Variable escoger discoteca
let escogioDiscoteca = false

//Variable info de la discoteca

let discoteca

while (escogioDiscoteca === false) {
    discoteca = discotecas.find((discoteca => discoteca.id === discotecaDeseada))
 if (!discoteca) {
    discotecaDeseada = parseInt (
        prompt(
            "Vuelva a escoger la discoteca que mejor se ajusta a tu presupuesto? 1.La chula- 2.Teatro Victoria- 3.La House- 4.La terraza"
        )
    )
 } else {
    escogioDiscoteca = true
 }
 }

// Dia en los que las discotecas abren
class Dia {
    constructor(id,nombreDia,multi){
        this.id = id
        this.nombreDia = nombreDia
        this.multi = multi
    }
}

const dias = [ 
    new Dia( 1,'Viernes',2),
    new Dia(2,'Sabado',3),
    new Dia(3,'Domingo',1)
]
let diaDeseado = parseInt(
    prompt("Ingresa el dia que quieres ir a la discoteca 1.Viernes- 2. Sabado- 3. Domingo"))
    let escogioDia = false
while (escogioDia === false) {
    Dia = dias.find((Dia => Dia.id === diaDeseado))
 if (!Dia) {
    diaDeseado = parseInt (
        prompt(
            "Vuelva a escoger el dia que quiere ir a la discoteca"
        )
    )
 } else {
    escogioDia = true
 }
 }


const coverFinal = calcularCosto(ia.multi, discoteca.cover)

//funcion calcular costos dependiendo el cover de la discoteca y el dia.
function calcularCosto(cover,dia){
    const costo = (cover*dia)
    return costo
}

alert (`El cover en ${discoteca.nombre} son: ${coverFinal}`)


