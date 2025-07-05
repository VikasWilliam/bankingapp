import { LitElement, css, html } from 'lit'
import './header/Header'

export class MyElement extends LitElement {
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
      </div>
     
    `
  }
  static get styles() {
    return css`
          `
  }
}

window.customElements.define('my-element', MyElement)
