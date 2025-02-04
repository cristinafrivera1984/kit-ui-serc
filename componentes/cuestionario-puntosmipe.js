class CuestionarioPuntoMipe extends HTMLElement {
    constructor() {
        super();
        this.nombrepuntomipe = this.getAttribute('nombrepunto') ?? "Punto Mipe nombre";
        this.direccionpunto = this.getAttribute('direccion') ?? "Av Siempre Viva #123.";
        this.telefonopunto = this.getAttribute('telefono') ?? "+56994848484";
        this.innerHTML = /*html*/ `<div class="box-info-acd box-1">
            <p><strong>${this.nombrepuntomipe}</strong></p>
            <p><span class="material-symbols-outlined align-middle"> location_on </span> <strong>Dirección: </strong>${this.direccionpunto}</p>
            <p><span class="material-symbols-outlined align-middle"> phone_in_talk </span> <strong>Teléfonos: </strong> ${this.telefonopunto}</p>
        </div>`;
    }

}

customElements.define('cuestionario-puntomipe', CuestionarioPuntoMipe);