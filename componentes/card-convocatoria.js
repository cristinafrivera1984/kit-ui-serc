class CardConvocatorias extends HTMLElement {
    constructor() {
        super();
        this.tituloconvocatoria = this.getAttribute('tituloconvocatoria') ?? "Titulo ejemplo Crece Arica y Parinacota 2025";
        this.inicioconvocatoria = this.getAttribute('inicioconvocatoria') ?? "21/02/2025";
        this.cierreconvocatoria = this.getAttribute('cierreconvocatoria') ?? "12/12/2026";
        this.region = this.getAttribute('region') ?? "Arica y Parinacota";
        this.urlpostula = this.getAttribute('urlpostula') ?? "#";
        this.innerHTML = /*html*/ `<div class="box-item-postulaciones row">
            <div class="col-md-10">
                <a href="${this.urlpostula}">${this.tituloconvocatoria}</a>
                <div class="d-flex flex-sm-row flex-column mb-2">
                    <div class="me-4 me-4 my-1">
                        <span class="material-symbols-outlined align-bottom"> calendar_month </span>
                        <p class="d-inline"><strong>Inicio:</strong> ${this.inicioconvocatoria} </p>
                    </div>
                    <div class="me-4 me-4 my-1">
                        <span class="material-symbols-outlined align-bottom"> calendar_month </span>
                        <p class="d-inline"> <strong>Cierre:</strong> ${this.cierreconvocatoria} </p>
                    </div>
                    <div class="me-4 me-4 my-1">
                        <span class="material-symbols-outlined align-bottom"> location_on </span>
                        <p class="d-inline">${this.region}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2 box-button">
                <a class="btn-primary-dk-blue rounded-pill" role="button" aria-label="Postular" title="Postular" href="${this.urlpostula}">Postular</a>
            </div>
        </div>`;

    }

}

customElements.define('card-convocatorias', CardConvocatorias);