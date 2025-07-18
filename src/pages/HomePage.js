import { LitElement, html, css } from "lit-element";
import storeItems from "../data/items.js";
import "../header/MyButton";

export class HomePage extends LitElement {
  static styles = css`
    .product {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 20px;
      gap: 80px;
      width: 100%;
      margin-left: 50px;
    }

    .product_item {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 4px;
      background-color: #f9f9f9;
      text-align: center;
      height: 225px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.1s;
    }

    .product_item:hover {
      transform: scale(1.05);
    }

    .product_item img {
      max-height: 180px;
      width: auto;
      object-fit: contain;
    }

    .product_name {
      display: flex;
      margin-top: 15px;
      gap: 25px;
    }
  `;

  static properties = {
    searchKeyword: { type: String }
  };

  constructor() {
    super();
    this.searchKeyword = "";
  }

  // updated(changedProps) {
  //     if (changedProps.has("searchKeyword")) {
  //         console.log("Filter triggered with keyword:", this.searchKeyword);
  //     }
  // }

  handleClick(e) {
    alert("button clicked");
  }

  get filteredItems() {
    if (!this.searchKeyword) return storeItems;

    const keyword = this.searchKeyword.toLowerCase();
    return storeItems.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );
  }

  render() {
    return html`
      <div class="product">
        ${this.filteredItems.map(
      (product) => html`
            <div class="product_item">
              <img src=${product.imgUrl} alt=${product.name} />
              <div class="product_name">
                <div>${product.name}</div>
                <my-button
                  label="apply"
                  ?primary=${true}
                  size="small"
                  backgroundColor="orange"
                  @click=${this.handleClick}
                ></my-button>
              </div>
            </div>
          `
    )}
      </div>
    `;
  }
}

window.customElements.define("home-page", HomePage);