import { newSpecPage } from '@stencil/core/testing';
import { KubaInput } from '../kuba-input';

describe('kuba-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KubaInput],
      html: `<kuba-input></kuba-input>`,
    });
    expect(page.root).toEqualHtml(`
      <kuba-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuba-input>
    `);
  });
});
