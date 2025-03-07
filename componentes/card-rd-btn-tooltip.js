class CardRadioButtonTool extends HTMLElement {
    constructor() {
        super();
        this.titulo = this.getAttribute('titulo') ?? "Cooperativa";
        this.icon = this.getAttribute('icon');
        this.widthicon = this.getAttribute('width') ?? "30";
        this.heighticon = this.getAttribute('height') ?? "30";
        this.tooltext = this.getAttribute('tooltext') ?? "Lorem ipsum";
        this.innerHTML = /*html*/ `<div class="card-steps d-flex flex-column align-items-md-center align-items-start position-relative">
            <div class="circle-card">
                <img src="${this.icon}" width="${this.widthicon}" height="${this.heighticon}">
            </div>
            <div class="d-flex flex-row form-check">
                <div class="mt-3">
                    <input class="form-check-input kit-gob" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                </div>
                <div class="mt-3">
                    <p class="fw-bold">${this.titulo}</p>
                </div>
            </div>
            <div class="p-tooltip-card">
                <a href="#" class="color-blue" data-bs-toggle="tooltip" data-bs-title="${this.tooltext}">
                    <span class="material-symbols-outlined">
                        help
                    </span>
                </a>
            </div>
        </div>`;


    }

}

customElements.define('card-radio-button-tool', CardRadioButtonTool);

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));