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
  render() {
    return html`
      <style>
        /* local DOM styles go here */
        :host {
          display: inline-block;
        }
      </style>
      <!-- local DOM goes here -->
      <span>Not much here yet.</span>
    `;
  }
}

window.customElements.define('icon-toggle', IconToggle);
