//Cards de Información de CDN'S de módulo de 3 pestaña
class CardCdnInfo extends HTMLElement {
    constructor() {
        super();
        this.nombrecentro = this.getAttribute('nombrecdn') ?? "Coyhaique";
        this.direcentro = this.getAttribute('direcdn') ?? "Avenida Siempre Viva #123, Sprinfield";
        this.telefonocentro = this.getAttribute('telcdn') ?? "+56 876 5433";
        this.mailcentro = this.getAttribute('mailcdn') ?? "abmariabustamante@centrossercotec.cl";
        this.urlcentro = this.getAttribute('urlcdn') ?? "#";
        this.innerHTML = /*html*/ `
        
        <div class="box-item-cdn">
            <div class="text-center my-3">
                <img class="me-1" src="images/icon_logo_cdn.svg" width="42" height="38" alt="Icono Centro de Desarrollo">
                <h2 class="d-inline">${this.nombrecentro}</h2>
            </div>
        
            <div class="d-flex flex-row my-2">
                <div class="me-1">
                    <span class="material-symbols-outlined align-middle"> location_on </span>
                </div>
                <div>
                    <p>${this.direcentro}</p>
                </div>
            </div>
            <div class="d-flex flex-row my-2">
                <div class="me-1">
                    <span class="material-symbols-outlined align-middle"> phone_in_talk </span>
                </div>
                <div>
                    <p>${this.telefonocentro}</p>
                </div>
            </div>
            <div class="d-flex flex-row my-2">
                <div class="me-1">
                    <span class="material-symbols-outlined align-middle">mail </span>
                </div>
                <div>
                    <p>${this.mailcentro}</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <a href="${this.urlcentro}" class="ver-mas mx-auto">Ver más <img src="images/btn_ver_mas.svg" width="20" height="20" alt="" aria-hidden="true">
                </a>
            </div>
        </div>`;

    }

}

customElements.define('card-cdn-info', CardCdnInfo);