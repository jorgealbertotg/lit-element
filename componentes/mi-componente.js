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
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h1>Mi Componente</h1>
        <componente-hijo nombre="${'Tolentino'}" id="${'childComponent'}" .emotion="${':)'}" ?disabled="${true}"></componente-hijo>
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);