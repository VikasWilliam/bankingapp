import { html, css, LitElement } from "lit-element";
import "./MyButton"

export class Header extends LitElement {
    constructor() {
        super();
        // this.keyword = "Enter search Item";
        this.searchWord = "";
    }

    static get styles() {
        return css`
        .header_item{
            position: sticky;
            top:0;
            padding:10px;
            background-color: tomato;
            display:flex;
            justify-content:space-between;
            align-items:Center;
            color:white;
            border-radius:5px;
            box-shadow:25px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
           

        }
        .first_div{
            display:flex
        }
        input{
            padding: 10px 16px;
            border:none;
            border-radius: 8px;
            background-color: #f2f2f2;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
            font-size: 16px;
            color: #444;
            outline: none;
            margin-right: 8px;
            width: 250px;
        }
        .login_img {
            height: 50px;
            width: 50px;
            object-fit: contain;
            border-radius: 8px;
            margin-right:20px;
        }
        .login_img:hover{
            transform: scale(1.5)
        }

        `
    }

    static get properties() {
        return {
            keyword: { type: String }
        }
    }

    // handleInput(e) {
    //     this.keyword = e.target.value != "" ? e.target.value : "Enter search Item";
    // }

    handleClick() {
        const input = this.renderRoot.querySelector('input');
        const keyword = input?.value || '';
        console.log("===>", keyword);


        //dispatch custome event to pass data to parent element
        this.dispatchEvent(new CustomEvent('search-keyword', {
            detail: keyword,
            bubbles: true,
            composed: true,
        }))
    }


    render() {
        return html`
        <header class="header_item">
            <div class="first_div">
                <img src="/src/assets/ing-logo-full.svg" alt="Logo" >
                <h1>MyBank</h1></div>
            <div>
            <input placeholder="What are you looking for?"/>
            <my-button label="Search" ?primary=true size="large" backgroundColor="white" @click=${this.handleClick}></my-button>
            <p>${this.keyword}</p>
            </div>
            <div>
                <img src="/src/assets/login_icon.png" class="login_img"/>
            </div>
        </header>`
    }
}

window.customElements.define('bank-header', Header)