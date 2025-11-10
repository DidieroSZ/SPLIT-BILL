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

    static properties(){

    }
    constructor(){
        super();
    }

    /* static styles = [
        css` ${unsafeCSS(bootstrap)} `,
        css` ${generaStyles}`
    ]; */

    render(){
        return html`
            <div class="general--container money--container p-3 rounded-3 border border-1">
                <span class="dollar--icon d-flexx">${unsafeHTML(svgIcons.dollar)}</span>
                <input @blur=${this._formatValue}  class="form-control form-control-lg input--cantidad" type="text" min="1" name="cantidad">
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
    }
}
customElements.define('money-component', MoneyComponent);