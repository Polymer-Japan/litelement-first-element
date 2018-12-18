import { LitElement, html } from '@polymer/lit-element';
import '../icon-toggle.js';

class IconToggleDemo extends LitElement {
  constructor() {
    super();
    this.isFav = false;
  }
  render() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          --icon-toggle-color: lightgrey;
          --icon-toggle-outline-color: black;
          --icon-toggle-pressed-color: red;
        };
      </style>

      <h3>Statically-configured icon-toggles</h3>

      <icon-toggle icon="star"></icon-toggle>
      <icon-toggle icon="star" pressed></icon-toggle>

      <h3>Data-bound icon-toggle</h3>

      <!-- use a computed binding to generate the message -->
      <div><span>${this.message(this.isFav)}</span></div>

      <!-- event handler "@event" --> 
      <icon-toggle icon="favorite" @pressed-changed="${this.pressedChanged}"></icon-toggle>
    `;
  }
  message(fav) {
    if (fav === true) return "You really like me!";
    if (fav === false) return "Do you like me?";
  }
  pressedChanged(e) {
    this.isFav = e.detail;
  }
  static get properties() {
    return {
      isFav: Boolean
    };
  }
}

window.customElements.define('icon-toggle-demo', IconToggleDemo);
