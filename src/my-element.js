import { LitElement, css, html } from 'lit'
import { Router } from '@vaadin/router';
import './pages/HomePage.js';
import './pages/AccountPage.js';
import './header/Header'
import './sideNav/SideNav'

export class MyBankElement extends LitElement {
  static styles = css`
  .sidenav_page{
    display:flex;
  }
  `

  static get properties() {
    return {

    }
  }

  constructor() {
    super()

  }

  render() {
    return html`
      <div>
      <bank-header></bank-header>
      <div class="sidenav_page">
      <side-nav></side-nav>
      <div id="outlet"></div>
      </div>
      </div>  
    `
  }
  firstUpdated() {
    const outlet = this.renderRoot.querySelector('#outlet');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/account', component: 'account-page' },
    ]);
  }
  static get styles() {
    return css`
          `
  }
}

window.customElements.define('my-bank-element', MyBankElement)
