import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

export class MyButton extends LitElement {
  static properties = {
    label: { type: String },
    primary: { type: Boolean },
    backgroundColor: { type: String },
    size: { type: String }
  };

  static styles = css`
    .storybook-button {
      display: inline-block;
      cursor: pointer;
      border: 0;
      border-radius: 3em;
      font-weight: 700;
      line-height: 1;
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, sans-serif;

    }

    .storybook-button--primary {
      background-color: #555ab9;
      color: white;
    }

    .storybook-button--secondary {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      background-color: transparent;
      color: #333;
    }

    .storybook-button--small {
      padding: 10px 16px;
      font-size: 12px;
    }

    .storybook-button--medium {
      padding: 11px 20px;
      font-size: 14px;
    }

    .storybook-button--large {
      padding: 12px 24px;
      font-size: 16px;
    }
  `;

  constructor() {
    super();
    this.label = 'Button';
    this.primary = false;
    this.backgroundColor = null;
    this.size = 'medium';
  }

  render() {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return html`
      <button
        type="button"
        class=${['storybook-button', `storybook-button--${this.size}`, mode].join(' ')}
        style=${styleMap({ backgroundColor: this.backgroundColor })}
        @click=${() => this.dispatchEvent(new Event('button-click'))}
      >
        ${this.label}
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);
