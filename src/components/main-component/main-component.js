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
        cantidad: {type: Number },
        personas: {type: Number },
    }
    constructor(){
        super();
        this.cantidad = 0;
        this.personas = 2;
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
                    <people-component @people-set=${this._changePeople}></people-component>
                    <money-component @quantity-set=${this._changeQuantity} class="gen-component"></money-component>
                    <result-component .cantidad=${this.cantidad} .personas=${this.personas} class="gen-component"></result-component>
                </div>
                
            </main>
            
        `;
    }

    _changeQuantity(e){
        this.cantidad = e.detail.cant;
    }
    _changePeople(e){
        this.personas = e.detail.ppl;
    }
}
customElements.define('main-component', MainComponent);