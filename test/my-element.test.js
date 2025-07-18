import { html, fixture, expect } from '@open-wc/testing';
import '../src/my-element.js';

describe('my-bank-element', () => {
    it('renders the correct layout', async () => {
        const el = await fixture(html`<my-bank-element></my-bank-element>`);
        await el.updateComplete;

        expect(el.shadowRoot.querySelector('side-nav')).to.exist;
        expect(el.shadowRoot.querySelector('bank-header')).to.exist;
        expect(el.shadowRoot.querySelector('#outlet')).to.exist;
    });
});
