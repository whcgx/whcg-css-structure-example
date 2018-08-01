'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@whcg/whcg-lit-text-field/theme/whcg-lit-text-field-styles.js');
require('@vaadin/vaadin-text-field/src/vaadin-text-field.js');
var polymerElement_js = require('@polymer/polymer/polymer-element.js');

class WhcgLitTextField extends polymerElement_js.PolymerElement {
    static get template() {
        return polymerElement_js.html `
        <style include="whcg-lit-text-field-style-default-theme">
            vaadin-text-field {
                --material-body-text-color: var(--lit-text-field-color);
            }
        </style>
        <vaadin-text-field value="thevalue" label="thelabel"></vaadin-text-field>
    `
    };   
}

window.customElements.define('whcg-lit-text-field', WhcgLitTextField);

exports.WhcgLitTextField = WhcgLitTextField;
