class CuestionarioInfoBox extends HTMLElement {
    constructor() {
        super();
        this.titulo = this.getAttribute('titulo') ?? "Nombre Programa";
        this.inforesumen = this.getAttribute('inforesumen') ?? "hola esto es un resumen";
        this.linkinfo = this.getAttribute('link') ?? "#";
        this.innerHTML = /*html*/ `<div class="box-info-acd box-1">
            <p><strong>${this.titulo}:</strong> ${this.inforesumen}</p>
            <a class="link-blue" href="${this.linkinfo}" title="Acá va el link de parametro de la region">Más información</a>
        </div>`;
    }

}

customElements.define('cuestionario-infobox', CuestionarioInfoBox);


//estas son las cajas que no son ni punto mipe ni financiamiendo (programas)