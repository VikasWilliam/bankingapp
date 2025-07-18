import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';
import './pages/HomePage.js';
import './pages/AccountPage.js';
import './header/Header.js';
import './sideNav/SideNav.js';
//lit router
//web test runner

export class MyBankElement extends LitElement {
  static styles = css`
    .sidenav_page {
      display: flex;
    }
  `;

  static get properties() {
    return {
      searchKeyword: { type: String }
    };
  }

  constructor() {
    super();
    this.searchKeyword = '';
  }

  handleSearch(e) {
    this.searchKeyword = e.detail;
    console.log("Captured in parent =>", this.searchKeyword);

    // Give time for route render to complete

    const outlet = this.renderRoot.querySelector('#outlet');
    const child = outlet?.firstElementChild;

    if (child instanceof customElements.get('home-page')) {
      child.searchKeyword = this.searchKeyword;
    }
  }

  render() {
    return html`
      <div>
        <bank-header @search-keyword=${this.handleSearch}></bank-header>
        <div class="sidenav_page">
          <side-nav></side-nav>
          <div id="outlet"></div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.renderRoot.querySelector('#outlet');

    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/account', component: 'account-page' },
    ]);

    this.outlet = outlet; // save reference if needed later
  }
}

window.customElements.define('my-bank-element', MyBankElement);