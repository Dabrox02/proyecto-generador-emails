export class CustomEmailComponent extends HTMLElement {

    constructor() {
        super();
    }

    _loadForm() {
        this.innerHTML = /*html*/`
    <form id="generate-custom-emails" class="text-center">
        <div>
            <label for="user_email">Usuario Correo</label>
            <input type="text" name="user_email" id="user_email"  value="jtvpremium">
        </div>
        <div>
            <label for="domain_email">Dominio Correo</label>
            <input type="text" name="domain_email" id="domain_email" required value="example.com">
        </div>
        <div>
            <label for="quantity_email">Cantidad Correos</label>
            <input type="number" name="quantity_email" id="quantity_email" required value="5">
        </div>
        <div>
            <h2>Settings</h2>
            <div id="settings">
                <div>
                    <input type="checkbox" name="add_letters_upper" id="setting_letters_upper" checked>
                    <label for="setting_letters_upper">Mayusculas</label>
                </div>
                <div>
                    <input type="checkbox" name="add_letters_lower" id="setting_letters_lower" checked>
                    <label for="setting_letters_lower">Minusculas</label>
                </div>
                <div>
                    <input type="checkbox" name="add_numbers" id="setting_numbers" checked>
                    <label for="setting_numbers">Numeros</label>
                </div>
            </div>
        </div>
        <div>
            <h2>Trucos</h2>
            <div id="tricks">
                <input type="checkbox" name="dot_trick" id="dot_trick">
                <label for="dot_trick">Agregar "."</label>
            </div>
            <div>
                <input type="checkbox" name="plus_trick" id="plus_trick" checked>
                <label for="plus_trick">Agregar "+"</label>
            </div>
        </div>
        <div>
            <button type="submit" class="btn btn-primary">Generar</button>
        </div>
    </form>
        `
    }

    connectedCallback() {
        this._loadForm();
    }
}

customElements.define("custom-email-component", CustomEmailComponent);