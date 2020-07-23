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
       nombre: { type: String, noAccessor: true, hasChanged(newVal, oldVal) { console.log('ha cambiado el nombre (hasChanged)?'); return true; } }
      //nombre: { type: String, hasChanged(newVal, oldVal) { console.log('ha cambiado el nombre (hasChanged)?'); return true; } }
    };
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    console.log('Seteo de propiedades: nombre => actual, anterior', value, this.nombre);
    const old = this._nombre;
    this._nombre = value;
    this.requestUpdate('nombre', old);
  }

  // _requestUpdate(pr,e) {
  //   console.log('_RequestUpdate sobre la propiedad', pr, e);
  //   super._requestUpdate(pr, e);
  // }
  
  requestUpdate(pr, e) {
    console.log('Inicia RequestUpdate sobre la propiedad', pr, e);
    const r = super.requestUpdate(pr, e);
    console.log('Termina RequestUpdate sobre la propiedad', pr, e, r);
    return r;
  }

  firstUpdated() {
    super.firstUpdated();
    console.log('First update');
  }

  performUpdate() {
    console.log('Inicia performUpdate');
    const r = super.performUpdate();
    console.log('Termina performUpdate', r);
    return r;
  }

  shouldUpdate(props) {
    console.log('Inicia shouldUpdate?', props);
    const r = super.shouldUpdate(props);
    console.log('Termina shouldUpdate?', props, r);
    return r;
  }

  update(props) {
    console.log('Inicia update', props);
    const r = super.update(props);
    console.log('Termina update', props, r);
    return r;
  }

  updated(props) {
    console.log('Inicia updated', props);
    const r = super.updated();
    console.log('Termina updated', props, r);
    return r;
  }

  constructor() {
    super();
    console.log('Primero se ejecuta el Constructor');
    this.nombre = 'Tolentino';

    setTimeout(() => {
      console.log('Cambio de nombre');
      this.nombre = 'Alberto';
    }, 3000);
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
      </div>
    `;
  }
}

window.customElements.define('mi-componente', MiComponente);