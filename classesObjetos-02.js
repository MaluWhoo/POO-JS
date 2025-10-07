// FAZENDO OBJETOS:

// Notação Literal ->

/*
const hotel = {
    quartos: 20,
    ocupados: 10,
    piscinas: 5,
    verificarDisponibilidade: function(){
        let resposta = this.quartos - this.ocupados;
        return console.log("Disponíveis: " + resposta);
    }
}

hotel.quartos = 50;
// hotel['quartos'] = 30;
// delete hotel.piscinas

console.log("Quartos: " + hotel.quartos);
console.log("Piscinas: " + hotel.piscinas);
*/


// Notação de construtor (obejto em branco) ->
/*
const hotel = new Object()
hotel.quartos = 20;
hotel.ocupados = 10;

hotel.verificarDisponibilidade  = function(){
    let resposta = this.quartos - this.ocupados;
    return console.log(`Disponíveis: ${resposta}`);
}

hotel.quartos = 50;
// hotel['quartos'] = 100;

console.log(`Quartos: ${hotel.quartos}`);
hotel.verificarDisponibilidade();
*/



// Criando Classes (mais simples)
class Hotel {

    constructor(){
        // console.log("Executou primeiro!");
        this.quartos = 20;
        this.ocupados = 10;
    }

    // Metodo
    verificarDisponibilidade(){
        let resposta = this.quartos - this.ocupados;
        return console.log(`Disponíveis: ${resposta}`);
    }

}

// Criando um objeto a partir de uma classe. Ex.: é como se a Classe fosse a base/planta de uma casa e o objeto a casa em si.
const hotel = new Hotel()
console.log(`Quartos: ${hotel.quartos}`);

hotel.verificarDisponibilidade();