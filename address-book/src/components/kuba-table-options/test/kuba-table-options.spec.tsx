import { newSpecPage } from '@stencil/core/testing';
import { KubaTableOptions } from '../kuba-table-options';

describe('kuba-table-options', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KubaTableOptions],
      html: `<kuba-table-options></kuba-table-options>`,
    });
    expect(page.root).toEqualHtml(`
      <kuba-table-options>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuba-table-options>
    `);
  });
});
