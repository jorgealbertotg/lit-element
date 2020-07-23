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
      nombre: { type: String , attribute: false },
      apellido: { type: String , reflect: true, attribute: 'last' },
      age: { type: Number , hasChanged(current, last) { console.log(current, last)} },
      curp: { type: String, noAccessor: true }
    };
  }

  constructor() {
    super();
    this.nombre = 'Tolentino';
    this.age = 1;
    this.curp = "ninfi9on";

    // Change age with hasChanged function
    // setInterval(() => {
    //   this.age += 5;
    // } , 3000);

    // Change apellido with reflect to attribute last
    // setInterval(() => {
    //   this.apellido = new Date().toLocaleString();
    // } , 3000);

    // Change curp without setter
    // setInterval(() => {
    //   console.log('Curp change', this.curp);
    //   const oldValue = this.curp;
    //   this.curp = new Date().toLocaleString();
    //   this.requestUpdate('curp', oldValue);
    // } , 3000);
  }

  _changeAge(current, last) {
    console.log(current, last);
  }

  render() {
    return html`
      <div>
        <p>${this.curp}</p>
        <p>
          Hola <strong>${this.nombre} ${this.apellido}</strong>
        </p>
        <p>
          <slot></slot>
        </p>
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);