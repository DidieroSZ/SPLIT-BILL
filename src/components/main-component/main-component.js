import { LitElement, html, css } from "lit-element";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline'; // <-- BOOTSTRAP STYLES
/* import generaStyles from '../../css/general.css'; */ // <-- GENERAL STYLES
import "../people-component/people-component.js"
import "../money-component/money-component.js"
import { unsafeCSS } from 'lit-element';

export class MainComponent extends LitElement{

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
            <main class="main--container py-5 d-flexx d-row gap-3">
                <div class="filter--blur"></div>
                
                <people-component></people-component>
                <money-component></money-component>
                <result-component></result-component>
            </main>
            
        `;
    }
}
customElements.define('main-component', MainComponent);