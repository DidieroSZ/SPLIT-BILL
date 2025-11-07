import { LitElement, html, css } from "lit-element";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline'; // <-- BOOTSTRAP STYLES
import generaStyles from '../../css/genera.css.js'; // <-- GENERAL STYLES
import "../people-component/people-component.js"
import { unsafeCSS } from 'lit-element';

export class MainComponent extends LitElement{

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
            <main class="main--container py-5 d-flexx">
                <money-component></money-component>
                <people-component></people-component>
                <result-component></result-component>
            </main>
            
        `;
    }
}
customElements.define('main-component', MainComponent);