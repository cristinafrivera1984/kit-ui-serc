class CuestionarioProgramas extends HTMLElement {
    constructor() {
        super();
        this.nombreprograma = this.getAttribute('nombreprograma') ?? "Nombre Programa";
        this.infoprograma = this.getAttribute('inforesumen') ?? "hola esto es un resumen";
        this.linkinfo = this.getAttribute('link') ?? "#";
        this.innerHTML = /*html*/ `<div class="box-info-acd with-border">
            <p><strong>${this.nombreprograma}:</strong> ${this.infoprograma}</p>
            <div class="d-flex flex-md-row flex-column justify-content-between gap-2">
                <a class="link-blue" href="${this.linkinfo}" title="Acá va el link de parametro de la region">Más información</a>
                <button class="btn-number-conv" style="position: relative;">Postulaciones abiertas <span class="number-conv">5</span>
                </button>
                <p class="fw-bold">No hay postulaciones disponibles </p>
            </div>
        </div>`;
    }

}

customElements.define('cuestionario-programas', CuestionarioProgramas);