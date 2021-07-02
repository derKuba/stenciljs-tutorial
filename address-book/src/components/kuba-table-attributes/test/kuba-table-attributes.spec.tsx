import { newSpecPage } from '@stencil/core/testing';
import { KubaTableAttributes } from '../kuba-table-attributes';

describe('kuba-table-attributes', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KubaTableAttributes],
      html: `<kuba-table-attributes></kuba-table-attributes>`,
    });
    expect(page.root).toEqualHtml(`
      <kuba-table-attributes>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuba-table-attributes>
    `);
  });
});
