class CardSteps extends HTMLElement {
    constructor() {
        super();
        this.titulo = this.getAttribute ('Texto') ?? 'Soy un titulo';
        this.cuerpotexto = this.getAttribute ('texto') ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        this.imgicon = this.getAttribute ('images');
        this.infotip = this.getAttribute ('texto tool tip') ?? 'lorem ipsummmmm'
        this.innerHTML = ``
    }

}