import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

/*
 * `WhcgNumberField`
 * 
 * @customElement
 * @polymer
 
 */
class WhcgNumberField extends PolymerElement {
    static get template() {
        return html `
      
    <vaadin-text-field value="{{value}}" label="{{label}}" placeholder="{{placeholder}}" theme="align-right" prevent-invalid-input pattern="[0-9]*" >
        <div slot="suffix">{{suffix}}</div>
    </vaadin-text-field>

    `;
    }

    static get properties() {

        return {

            label: {
                type: String,
                notify: true,
                readOnly: false,
            },
            value: {
                type: String,
                notify: true,
                readOnly: false,
                observer: '_valueChanged'
            },
            placeholder: {
                type: String,
                notify: true,
                readOnly: false,
            },
            suffix: {
                type: String,
                notify: true,
                readOnly: false,
            },
            kind: {
                type: String,
                notify: true,
                readOnly: false,
            },
            period: {
                type: String,
                notify: true,
                readOnly: false,
            },
            valueoutput: {
                type: String,
                notify: true,
                readOnly: false,
            }
        }
    }

    _valueChanged() {
        console.log('new value');
        console.log(this.value);
        this.valueoutput = this.value;
    }

    connectedCallback() {
        super.connectedCallback();
        let event = new CustomEvent('childrenattached', {bubbles: true, composed: true});
        console.log('dispatchingEvent!!');
        this.dispatchEvent(event);

    }

}

window.customElements.define('whcg-number-field', WhcgNumberField);

export { WhcgNumberField };
