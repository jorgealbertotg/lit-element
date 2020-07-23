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
    this.nombre = 'Mundo';
  }

  _handleChangeName(e) {
    this.nombre = e.detail.nombre;
  }

  _handleClick() {
    this.nombre = 'Mundo';
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
        <p>
          <button @click="${this._handleClick}">Cambiar nombre</button>
        </p>
        <componente-hijo nombre="${this.nombre}" @change-name="${this._handleChangeName}"></componente-hijo>
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);