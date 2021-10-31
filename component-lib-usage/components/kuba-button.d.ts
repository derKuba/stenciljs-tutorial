import type { Components, JSX } from "../types/components";

interface KubaButton extends Components.KubaButton, HTMLElement {}
export const KubaButton: {
  prototype: KubaButton;
  new (): KubaButton;
};
