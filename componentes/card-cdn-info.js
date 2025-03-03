class CardCdnInfo extends HTMLElement {
    constructor() {
        super();
        this.nombrecentro = this.getAttribute('nombrecdn') ?? "Coyhaique";
        this.direcentro = this.getAttribute('direcdn') ?? "Avenida Siempre Viva #123, Sprinfield";
        this.telefonocentro = this.getAttribute('telcdn') ?? "+56 876 5433";
        this.mailcentro = this.getAttribute('mailcdn') ?? "abmariabustamante@centrossercotec.cl";
        this.urlcentro = this.getAttribute('urlcdn') ?? "#";
        this.innerHTML = /*html*/ `<div class="box-item-cdn-info">
            <div class="text-center my-3">
                <img src="../images/icons/tabs/icon_logo_cdn.svg" width="47" height="42">
                <h2 class="d-inline">${this.nombrecentro}</h2>
            </div>
        
            <div class="d-flex flex-row">
                <span class="material-symbols-outlined me-1 align-top"> location_on </span>
                <p class=""> ${this.direcentro}</p>
            </div>
            <div class="d-flex flex-row">
                <span class="material-symbols-outlined me-1 align-top"> phone_in_talk</span>
                <p class="d-inline"> ${this.telefonocentro}</p>
            </div>
            <div class="d-flex flex-row">
                <span class="material-symbols-outlined me-1 align-top"> mail </span>
                <p class="d-inline"> ${this.mailcentro}</p>
            </div>
            <div class="d-flex">
                <a class="ver-mas" href="${this.urlcentro}">Ver más
                    <img class="ms-2" src="../images/icons/tabs/btn_ver_mas.svg" width="20" height="20">
                </a>
            </div>
        </div>`;

    }

}

customElements.define('card-cdn-info', CardCdnInfo);