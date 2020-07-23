import { LitElement, html, css } from 'lit-element';
import './componente-hijo';

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

  _handleClick(e) {
    console.log('ChangeClick en mi componente', new Date().toLocaleString(), e.composedPath()[0]);
    this.nombre = e.detail.data
    const event = new CustomEvent('otherClick', {
      detail: {data: this.nombre},
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div>
        <p>
          Hola <strong>${this.nombre}</strong>
        </p>
        <p>
          <slot></slot>
        </p>
        <componente-hijo @changeClick="${this._handleClick}"></componente-hijo>
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);