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
            <article class="general--container people--container d-flexx d-row gap-3 p-3 rounded-3 border border-1">
                <span class="btn--circle d-flexx border trans"> ${unsafeHTML(svgIcons.plus)} </span>
                <div class="number--container px-3">
                    <p>2</p>
                </div>
                <span class="btn--circle d-flexx border trans"> ${unsafeHTML(svgIcons.minus)} </span>
                <div class="avatar--container">
                    d
                </div>
            </article>
            
        `;
    }
}
customElements.define('money-component', MoneyComponent);