class CardCdnCapacitaciones extends HTMLElement {
    constructor() {
        super();
        this.titulocurso = this.getAttribute('titulocurso') ?? "Quiero emprender";
        this.textoresumen = this.getAttribute('textoresumen') ?? "Texto resumen del curso Rerat iaculis ante, tincidunt dapibus leo mollis sit amet.";
        this.catcurso = this.getAttribute('categoria') ?? "categoria";
        this.fechacurso = this.getAttribute('fecha') ?? "12/12/2026"
        this.horacurso = this.getAttribute('hora') ?? "19:00";
        this.regioncurso = this.getAttribute('region') ?? "Metropolitana";
        this.centrocurso = this.getAttribute('centro') ?? "Santiago";
        this.urlcurso = this.getAttribute('urlcurso') ?? "Ver más";
        this.isonline = this.getAttribute('isonline') ?? false;
        this.innerHTML = /*html*/ `<div class="box-item-cdn">
            <div class="d-flex flex-row justify-content-end align-items-center mb-3">
                <div class="mx-2"><button class="chips-main card-cdn" role="button">${this.catcurso}</button></div>
                <div class="mx-2">
                    <button class="chips-main card-cdn" role="button">
                        ${this.isonline ? '<span class="material-symbols-outlined align-middle fs-6">wifi</span>online': '<span class="material-symbols-outlined align-middle fs-6">wifi</span>offline'}
                        Online
                    </button>
                </div>
            </div>
            <h3 class="title-cdn">${this.titulocurso}</h3>
            <p>${this.textoresumen}</p>
            <p><strong>Fecha: </strong> ${this.fechacurso}</p>
            <p><strong>Hora: </strong> ${this.horacurso}</p>
            <p><strong>Región: </strong> ${this.regioncurso}</p>
            <p><strong>Centro: </strong> ${this.centrocurso}</p>
            <div class="d-flex justify-content-center">
                <a href="${this.urlcurso}" class="ver-mas">Ver más <img class="ms-2 align-middle" src="../images/icons/vermas.svg" width="24" height="24"></a>
            </div>
        </div>`;

    }

}

customElements.define('card-cdn-capacitaciones', CardCdnCapacitaciones);