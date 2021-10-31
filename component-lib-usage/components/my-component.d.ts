import type { Components, JSX } from "../types/components";

interface MyComponent extends Components.MyComponent, HTMLElement {}
export const MyComponent: {
  prototype: MyComponent;
  new (): MyComponent;
};
