import AnimaNumeros from "./anima-numeros.js";

export default function fetchCatalogo(url, target, data, local, classe) {
    // Cria a div contendo informações
    // com o total de animais
    function createAnimal(animal) {
        const div = document.createElement('div');

        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`

        return div;
    }

    function preencherAnimais(animal) {
        const numerosGrid = document.querySelector(target);
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    function animaAnimaisNumeros() {
        const animaNumeros = new AnimaNumeros(data, local, classe);
        animaNumeros.init();
    }

    // Puxa os animais através de um arquivo JSON
    // e cria cada animal utilizando createAnimal
    async function catalogoAnimais() {
        try {
            const animaisResponse = await fetch(url);
            const animaisJson = await animaisResponse.json();
            animaisJson.forEach(animal => preencherAnimais(animal));
            animaAnimaisNumeros();
        } catch (erro) {
            console.log(erro)
        }
    }

    return catalogoAnimais()
}