import { LitElement, html, css } from "lit-element";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline'; // <-- BOOTSTRAP STYLES
/* import generaStyles from '../../css/genera.css.js'; */ // <-- GENERAL STYLES
/* import generaStyles from '../../css/general.css'; */ // <-- GENERAL STYLES
import { unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { svgIcons } from '../../utils/icons.js'

export class PeopleComponent extends LitElement{

    createRenderRoot() {
        return this;
    }

    static properties = {
        valor: {type: Number },
        avatares: {type: Array },
    }
    constructor(){
        super();
        this.valor = 2;
        this.avatares = [];
    }

    /* static styles = [
        css` ${unsafeCSS(bootstrap)} `,
        css` ${generaStyles}`
    ]; */

    render(){
        return html`
            <article class="general--container people--container d-flexx d-row gap-3 p-3 rounded-3 border border-1">
                <span @click=${this._btnClick} data-type="min" class="btn--circle d-flexx border trans"> ${unsafeHTML(svgIcons.minus)} </span>
                <div class="number--container px-3">
                    <p id="people--counter">2</p>
                </div>
                <span @click=${this._btnClick} data-type="sum" class="btn--circle d-flexx border trans"> ${unsafeHTML(svgIcons.plus)} </span>
                <div class="avatar--container d-flexx gap-2">
                    ${this._renderAvatares()}
                </div>
            </article>
        `;
    }

    _btnClick(e){
        const btn = e.target.closest('span');
        const people = this.renderRoot.querySelector('#people--counter');
        this.valor = parseInt(people.textContent);
        if (btn.dataset.type == 'sum') {
            people.textContent = parseInt(this.valor + 1);
            this.valor = this.valor + 1;
        }
        if (btn.dataset.type == 'min' && this.valor >= 3) {
            people.textContent = parseInt(this.valor - 1);
            this.valor = this.valor - 1;
        }
        this._eventLauncher(this.valor);
    }

    _renderAvatares(){
        const v = this.valor;
        this.avatares = [];
        for (let i = 0; i < v; i++) {
            this.avatares.push(html `
                <span class="btn--circle avatar d-flexx border trans">
                    <img src="https://avatar.iran.liara.run/public">
                </span>
            `);
        }
        return html`${this.avatares}`;
    }

     _eventLauncher(v){
         this.dispatchEvent(
            new CustomEvent('people-set', {
                bubbles: true,
                composed: true,
                detail: { ppl: v },
            })
        );
    }
}
customElements.define('people-component', PeopleComponent);