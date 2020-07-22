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
      section:nth-child(4)>p {
        border: 1px solid #eee;
        border-radius: 20px;
        background-color: #111;
        color: #fff;
        padding: 10px 20px;
      }
      section:nth-child(5)>p.valid {
        border: 1px solid blue;
        border-radius: 20px;
        background-color: skyblue;
        color: blue;
        padding: 10px 20px;
      }
      section:nth-child(5)>p {
        border: 1px solid red;
        border-radius: 20px;
        background-color: tomato;
        color: #fff;
        padding: 10px 20px;
      }
    `;
  }

  static get properties() {
    return {
      nombre: { type: String },
      tecnologias: { type: Array },
      frameworks: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.nombre = 'Tolentino';
    this.tecnologias = ['javascript', 'css', 'html', 'php', 'angular'];
    this.frameworks = false;
  }

  _handleClick() {
    this.frameworks = !this.frameworks;
  }

  get _frameworksValid() {
    return html`
      <p class="valid">
        <strong>Frameworks validos</strong>
      </p>`;
  }

  get _frameworksNoValid() {
    return html`<p>Frameworks no validos</p>`;
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
          <button @click="${this._handleClick}">Mostrar frameworks</button>
        </p>
        <section>
          ${
            this.tecnologias.map(tecnologia => {  
              return html`<p>${tecnologia}</p>`
            })
          }
        </section>
        <section>
          ${ this.frameworks ? this._frameworksValid : this._frameworksNoValid }
        </section>
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);