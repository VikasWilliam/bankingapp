import { LitElement, html, css } from "lit-element";
import { Router } from '@vaadin/router';

export class SideNav extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {}
    }

    static styles = css`
    :host {
    display: block;
    width: 240px;
    height: 100vh;
    background-color: #ebe7e3; /* Switch to white for contrast */
    color: #333;
    font-family: 'Nunito Sans', sans-serif;
    border: 2px solid #ff6347;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  }

  .nav-title {
    color: #ff6347;
    font-weight: bold;
    font-size: 22px;
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .nav-item {
    padding: 12px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    color: #444;
  }

  .nav-item:hover {
    background-color: #fbeae6;
  }
    `
    navigateTo(path) {
        Router.go(path);
    }
    render() {
        return html`
      <div class="nav-title">Navigation</div>
      <div class="nav-item"  @click=${() => this.navigateTo('/')}>🏠 Home</div>
      <div class="nav-item" @click=${() => this.navigateTo('/account')}>💼 Accounts</div>
      <div class="nav-item">💳 Cards</div>
      <div class="nav-item">⚙️ Settings</div>`
    }
}

window.customElements.define('side-nav', SideNav)
