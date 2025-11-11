import { LitElement, html, css } from "lit-element";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline'; // <-- BOOTSTRAP STYLES
/* import generaStyles from '../../css/genera.css.js'; */ // <-- GENERAL STYLES
/* import generaStyles from '../../css/general.css'; */ // <-- GENERAL STYLES
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { svgIcons } from '../../utils/icons.js'

export class MoneyComponent extends LitElement{

    createRenderRoot() {
        return this;
    }

    static properties = {
        valor: {type: Number },
    }
    constructor(){
        super();
        this.valor = 0;
    }

    /* static styles = [
        css` ${unsafeCSS(bootstrap)} `,
        css` ${generaStyles}`
    ]; */

    render(){
        return html`
            <div class="general--container money--container p-3 rounded-3 border border-1 d-flexx">
                <div class="form-floating w-100">
                    <input @blur=${this._formatValue} id="cantidadInput" class="form-control" value="0" type="text" min="1" name="cantidad">
                    <label for="cantidadInput">Cantidad</label>
                </div>
               
            </div>
        `;
    }

    _formatValue(e){
        let valor = e.target.value;
        valor = valor.replace(/[^\d.]/g, '');

        let numero = parseFloat(valor);
        const formato = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 2
        });

        e.target.value = formato.format(numero);
        this.valor = numero;
        this._eventLauncher(this.valor)
    }

    _eventLauncher(v){
         this.dispatchEvent(
            new CustomEvent('quantity-set', {
                bubbles: true,
                composed: true,
                detail: { cant: v },
            })
        );
    }
}
customElements.define('money-component', MoneyComponent);