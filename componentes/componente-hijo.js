import { LitElement, html, css } from 'lit-element';

export class ComponenteHijo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: 2px solid blue;
        border-radius: 20px;
        color: blue;
        text-align: center;
        background-color: skyblue;
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

  _handleClick() {
    this.nombre = "Jorge";
    const changeNameEvent = new CustomEvent('change-name', {
      detail: { nombre: this.nombre},
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changeNameEvent);
  }

  render() {
    return html`
      <div>
        <p>Hola <strong>${this.nombre}</strong> desde componente hijo</p>
        <p>
          <button @click="${this._handleClick}">Cambiar nombre</button>
        </p>
      </div>
    `;
  }
}

window.customElements.define('componente-hijo', ComponenteHijo);