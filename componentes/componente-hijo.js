import { LitElement, html, css } from 'lit-element';

export class ComponenteHijo extends LitElement {
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
      nombre: { type: String },
      id: { type: String },
      emotion: { type: String, attribute: false },
      disabled: { type: Boolean }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="${this.id}">
        <p>Hola <strong>${this.nombre} ${this.emotion}</strong></p>
        <p>
          <button ?disabled="${this.disabled}">Boton</button>
        </p>
      </div>
    `;
  }
}

window.customElements.define('componente-hijo', ComponenteHijo);