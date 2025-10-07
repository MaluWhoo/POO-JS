// Programação Orientada a Objeto

// Paradigma -> Exemplo  ou padrão a ser seguido. A forma como você soluciona problemas usando uma liguagem de programação

// JS e multi paradigma



// Procedural:

let quartos = 20;
let ocupados = 5;

function verificarDisponibilicade(quartos, ocupados){
    let resposta = quartos - ocupados;
    console.log(`Disponíveis: ${resposta}`);
}

verificarDisponibilicade(quartos, ocupados);


// POO:

    // Criando um obejto:
const hotel = {
    // Propriedade/atributos
    q: 20,
    o: 10,
    // Metodos
    VerificarDisponibilidade: function(){   
        let r = this.q - this.o
        console.log(`Disponíveis: ${r}`);
    }
}

hotel.VerificarDisponibilidade();