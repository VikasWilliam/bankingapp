import { LitElement, html, css } from "lit-element";

export class HomePage extends LitElement {
    constructor() {
        super();
    }

    static properties() {
        return {}
    }

    render() {
        return html`
         <div>This is home page</div>
        `
    }
}

window.customElements.define('home-page', HomePage)