class CardRadioButton extends HTMLElement {
    constructor() {
        super();
        this.titulo = this.getAttribute('titulo') ?? "Quiero emprender";
        this.bodytexto = this.getAttribute('bodytexto') ?? "Texto explicativo";
        this.icon = this.getAttribute('icon');
        this.widthicon = this.getAttribute('width') ?? "30";
        this.heighticon = this.getAttribute('height') ?? "30";
        this.innerHTML = `<div class="card-steps d-flex flex-column align-items-md-center align-items-start">
    <div class="circle-card">
        <img src="${this.icon}" width="${this.widthicon}" height="${this.heighticon}">
    </div>   
    <div class="d-flex flex-row form-check min-w-mobile">
        <div class="mt-3 me-1">
            <input class="form-check-input kit-gob" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
        </div>
        <div class="mt-3">
            <p class="fw-bold">${this.titulo}</p>
            <p>${this.bodytexto}</p>
        </div>
    </div>
</div>`;

    
}

}

customElements.define('card-radio-button', CardRadioButton);
