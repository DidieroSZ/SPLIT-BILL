import { LitElement, html, css } from "lit-element";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline'; // <-- BOOTSTRAP STYLES
import generaStyles from '../../css/genera.css.js'; // <-- GENERAL STYLES
import { unsafeCSS } from 'lit-element';

export class PeopleComponent extends LitElement{

    static properties(){

    }
    constructor(){
        super();
    }

    static styles = [
        css` ${unsafeCSS(bootstrap)} `,
        css` ${generaStyles}`
    ];

    render(){
        return html`
            <article class="people--container p-3 rounded-3 border border-1">
            d
            </article>
            
        `;
    }
}
customElements.define('people-component', PeopleComponent);