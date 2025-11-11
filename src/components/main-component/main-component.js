import { LitElement, html, css } from "lit-element";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline'; // <-- BOOTSTRAP STYLES
/* import generaStyles from '../../css/general.css'; */ // <-- GENERAL STYLES
import "../people-component/people-component.js"
import "../money-component/money-component.js"
import "../result-component/result-component.js"
import { unsafeCSS } from 'lit-element';

export class MainComponent extends LitElement{

    createRenderRoot() {
        return this;
    }
    static properties = {
        resultado: {type: Number },
    }
    constructor(){
        super();
        this.resultado = 0;
    }

    /* static styles = [
        css` ${unsafeCSS(bootstrap)} `,
        css` ${generaStyles}`
    ]; */

    render(){
        return html`
            <main class="main--container py-5 d-flexx">
                <div class="filter--blur"></div>
                <div class="container--components d-flexx gap-3">
                    <people-component></people-component>
                    <money-component class="gen-component"></money-component>
                    <result-component class="gen-component"></result-component>
                </div>
                
            </main>
            
        `;
    }
}
customElements.define('main-component', MainComponent);