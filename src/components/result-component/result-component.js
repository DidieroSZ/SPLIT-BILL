import { LitElement, html, css } from "lit-element";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline'; // <-- BOOTSTRAP STYLES
/* import generaStyles from '../../css/genera.css.js'; */ // <-- GENERAL STYLES
/* import generaStyles from '../../css/general.css'; */ // <-- GENERAL STYLES
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { svgIcons } from '../../utils/icons.js'


export class ResultComponent extends LitElement{

    createRenderRoot() {
        return this;
    }
    static properties = {
        cantidad: {type: Number },
        personas: {type: Number },
        resultado: {type: Number },
    }
    constructor(){
        super();
        this.cantidad = 0;
        this.personas = 2;
        this.resultado = 0;
    }

    /* static styles = [
        css` ${unsafeCSS(bootstrap)} `,
        css` ${generaStyles}`
    ]; */

    render(){
        return html`
            <div class="general--container result--container p-3 rounded-3 border border-1 d-flexx">
                ${this._renderResult()}
            </div>
            
        `;
    }

    _renderResult(){
        const c = this.cantidad;
        const p = this.personas;
        if (c > 0) {
            this.resultado = c / p;

            const formato = new Intl.NumberFormat('es-MX', {
                style: 'currency',
                currency: 'MXN',
                minimumFractionDigits: 2
            });
            this.resultado = formato.format(this.resultado);
            return html`
            
                <h4>${this.resultado}</h4>
            
            `;
        }
        else{
            return html`
               <h4>$0.00</h4>
            `;
            
        }
    }
}
customElements.define('result-component', ResultComponent);