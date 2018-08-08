import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@whcg/whcg-number-field';
import '@whcg/whcg-button';

class WhcgSearchBox extends PolymerElement {
    static get template() {
        return html `
        <style>
            :host {
                padding: 20px;
                background-color: red;
            }
        </style>
  
            <whcg-number-field placeholder="Type..."></whcg-number-field>
            <whcg-button>Search</whcg-button>


    `;
    }

    static get properties() {

        return {

           
        }
    }



}

window.customElements.define('whcg-search-box', WhcgSearchBox);

export { WhcgSearchBox };
