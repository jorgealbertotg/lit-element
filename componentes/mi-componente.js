import { LitElement, html, css, unsafeCSS } from 'lit-element';

export class MiComponente extends LitElement {

  /*
  static get styles() {
    // const color = 'red';

    // ERROR
    // return css`
    //   :host {
    //     display: block;
    //     border: 5px solid tomato;
    //     border-radius: 20px;
    //     padding: 20px;
    //     text-align: center;
    //     color: ${color};
    //   }
    // `;

    // CORRECT WAY
    const color = css`green`;
    return css`
      :host {
        display: block;
        border: 5px solid tomato;
        border-radius: 20px;
        padding: 20px;
        text-align: center;
        color: ${color};
      }
    `;

    // WARNING WAY
    // const color = 'yellow';
    // return css`
    //   :host {
    //     display: block;
    //     border: 5px solid tomato;
    //     border-radius: 20px;
    //     padding: 20px;
    //     text-align: center;
    //     color: ${ unsafeCSS(color)};
    //   }
    // `;
  }
  */

  static get properties() {
    return { };
  }

  constructor() {
    super();
  }

  get _styleTemplate() {
    // return html`
    //   <style>
    //     :host {
    //       display: block;
    //       color: yellow;
    //       background-color: greenyellow;
    //       border: 3px solid green;
    //       border-radius: 10px 10px 0 0;
    //       text-transform: uppercase;
    //       text-align: center;
    //       text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
    //     }
    //     :host(.red) {
    //       color: red;
    //       background-color: tomato;
    //       border: 3px solid red;
          
    //     }
    //     :host(.blue) {
    //       color: blue;
    //       background-color: skyblue;
    //       border: 3px solid blue;
    //     }
    //     ::slotted(*) {
    //       color: #fff;
    //       text-shadow: -2px -2px 1px purple, 2px 2px 1px purple, -2px 2px 1px purple, 2px -2px 1px purple;
    //     }
    //   </style>
    // `;

    // return html`
    //   <style>
    //     :host {
    //       display: block;
    //       color: var(--mi-componente-color, purple);
    //       background-color: var(--mi-componente-bg-color, plum);
    //       border: 3px solid var(--mi-componente-border-color, purple);
    //       border-radius: 10px 10px 0 0;
    //       text-transform: uppercase;
    //       text-align: center;
    //       text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
    //       @apply --mi-componente-main;
    //     }
    //   </style>
    // `;

    return html`
      <style>
        :host {
          display: block;
          color: var(--mi-componente-color, purple);
          background-color: var(--mi-componente-bg-color, plum);
          border: 3px solid var(--mi-componente-border-color, purple);
          border-radius: 10px 10px 0 0;
          text-transform: uppercase;
          text-align: center;
          text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${ this._styleTemplate }
      <div>
        <h1>Hola mundo</h1>
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);