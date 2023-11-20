export default class AnimaNumeros {
    constructor(numeros, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = document.querySelectorAll(observerClass);

        this.handleMutation = this.handleMutation.bind(this);
    }

    // Recebe um elemento do DOM, com contexto, com número em seu texto
    // incrementa a partir de 0 até o número final
    static incrementarNumero(numero) {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
            start += incremento;
            numero.innerText = start;
            if (start > total) {
                numero.innerText = total;
                clearInterval(timer);
            }
        }, 50 * Math.random());
    }

    // Ativar incrementar número para cada
    // número selecionado do DOM
     animaNumeros() {
        this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
    }

    // Função que ocorre quando a mutação ocorrer
     handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observador.disconnect();
            this.animaNumeros();
        }
    }

    // Adiciona o MutationObserver para verificar
    // Quando a classe ativo é adicionada ao
    // elemento target
    addMutationObserver() {
        this.observador = new MutationObserver(this.handleMutation);
        this.observador.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numeros.length && this.observerTarget) {
        this.addMutationObserver();
        }
        return this;
    }
}