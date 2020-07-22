import { LitElement, html, css } from 'lit-element';

export class MiComponente extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: 5px solid tomato;
        border-radius: 20px;
        padding: 20px;
      }
    `;
  }

  static get properties() {
    return {
      nombre: { type: String }
    };
  }

  constructor() {
    super();
    this.nombre = 'Tolentino';
  }

  _handleMouseOver() {
    console.log('Mouse enter en mi componente', new Date().toLocaleString());
  }

  render() {
    return html`
      <div @mouseover="${this._handleMouseOver}">
        <p>
          Hola <strong>${this.nombre}</strong>
        </p>
        <p>
          <slot></slot>
        </p>
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);