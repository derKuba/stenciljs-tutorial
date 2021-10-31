import type { Components, JSX } from "../types/components";

interface KubaInput extends Components.KubaInput, HTMLElement {}
export const KubaInput: {
  prototype: KubaInput;
  new (): KubaInput;
};
