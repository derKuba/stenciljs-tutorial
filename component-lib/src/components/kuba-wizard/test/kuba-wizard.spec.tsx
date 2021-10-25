import { newSpecPage } from '@stencil/core/testing';
import { KubaWizard } from '../kuba-wizard';

describe('kuba-wizard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KubaWizard],
      html: `<kuba-wizard></kuba-wizard>`,
    });
    expect(page.root).toEqualHtml(`
      <kuba-wizard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuba-wizard>
    `);
  });
});
