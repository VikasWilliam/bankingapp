import { html, css, LitElement } from "lit-element";
import "./MyButton"

export class Header extends LitElement {
    static get styles() {
        return css`
        .header_item{
            padding:10px;
            background-color: tomato;
            display:flex;
            justify-content:space-between;
            align-items:Center;
            color:white;
            border-radius:5px;
            box-shadow:25px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* ✅ Fixed */

        }
        .first_div{
            display:flex
        }
        `
    }

    static get properties() {
        return {}
    }
    render() {
        return html`
        <header class="header_item">
            <div class="first_div">
                <img src="/src/assets/ing-logo-full.svg" alt="Logo" >
                <h1>MyBank</h1></div>
            
            <div>
            <input/>
            <my-button label="Search" ?primary=true size="large" backgroundColor="white"></my-button>
            </div>
            <div>Login</div>
        </header>`
    }
}

window.customElements.define('bank-header', Header)