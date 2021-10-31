import type { Components, JSX } from "../types/components";

interface KubaWizard extends Components.KubaWizard, HTMLElement {}
export const KubaWizard: {
  prototype: KubaWizard;
  new (): KubaWizard;
};
