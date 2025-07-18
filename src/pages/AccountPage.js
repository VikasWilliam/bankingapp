import { LitElement, html, css } from "lit-element";
import car from '../imgs/car.jpg';

export class AccountPage extends LitElement {
    constructor() {
        super();
    }

    static properties() {
        return {};
    }

    render() {
        return html`
         <div>This is the Account page</div>
         <img src=${car} alt="test car" />
        `
    }
}

window.customElements.define('account-page', AccountPage);