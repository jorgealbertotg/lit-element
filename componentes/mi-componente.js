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
    };
  }

  constructor() {
    super();
  }

  // createRenderRoot() {
  //   return this;
  // }
  
  render() {
    return html`
      <article>
        <header>
          <slot name="head"></slot>
        </header>
        <main>
          <slot name="body"></slot>
        </main>
        <footer>
          <slot name="foot"></slot>
        </footer>
      </article>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);