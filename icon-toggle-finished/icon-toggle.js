import { LitElement, html } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

/**
 * `icon-toggle`
 * Get started creating custom elements with LitElement
 *
 * @customElement
 * @demo demo/index.html
 */
class IconToggle extends LitElement {
  constructor() {
    super();
    this.pressed = false;
  }
  static get properties() {
    return {
      icon: String,
      pressed: {
        type: Boolean,
        reflect: true,
      }
    };
  }
  toggle() {
    this.pressed = !this.pressed;
  }
  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    if(name === 'pressed') this.dispatchEvent(new CustomEvent('pressed-changed', { detail: this.pressed }));
  }
  render() {
    return html`
      <style>
        /* local styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
      </style>
      <!-- local DOM goes here -->
      <iron-icon icon="${this.icon}" @click="${this.toggle}">
      </iron-icon>
    `;
  }
}

window.customElements.define('icon-toggle', IconToggle);
