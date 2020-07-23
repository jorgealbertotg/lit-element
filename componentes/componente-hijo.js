import { LitElement, html, css } from 'lit-element';

export class ComponenteHijo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: 5px solid skyblue;
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

  _handleClick() {
    const e = new CustomEvent('changeClick', {
      detail: {data: this.nombre},
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(e);
  }

  render() {
    return html`
      <div @click="${this._handleClick}">
        Hola <strong>${this.nombre}</strong>
      </div>
    `;
  }
}

window.customElements.define('componente-hijo', ComponenteHijo);