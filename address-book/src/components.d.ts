/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppRoot {
    }
    interface KubaAddressForm {
        "match": MatchResults;
    }
    interface KubaButton {
        "componentId": string;
        "handleSubmit": any;
    }
    interface KubaHome {
    }
    interface KubaInput {
        "componentId": string;
        "inputType": "text" | "number";
        "label": string;
        "value": string;
    }
    interface KubaList {
    }
    interface KubaTableAttributes {
        "body": any;
        "head": any;
    }
    interface KubaTableOptions {
        "delete": any;
    }
    interface KubaTableSlot {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLKubaAddressFormElement extends Components.KubaAddressForm, HTMLStencilElement {
    }
    var HTMLKubaAddressFormElement: {
        prototype: HTMLKubaAddressFormElement;
        new (): HTMLKubaAddressFormElement;
    };
    interface HTMLKubaButtonElement extends Components.KubaButton, HTMLStencilElement {
    }
    var HTMLKubaButtonElement: {
        prototype: HTMLKubaButtonElement;
        new (): HTMLKubaButtonElement;
    };
    interface HTMLKubaHomeElement extends Components.KubaHome, HTMLStencilElement {
    }
    var HTMLKubaHomeElement: {
        prototype: HTMLKubaHomeElement;
        new (): HTMLKubaHomeElement;
    };
    interface HTMLKubaInputElement extends Components.KubaInput, HTMLStencilElement {
    }
    var HTMLKubaInputElement: {
        prototype: HTMLKubaInputElement;
        new (): HTMLKubaInputElement;
    };
    interface HTMLKubaListElement extends Components.KubaList, HTMLStencilElement {
    }
    var HTMLKubaListElement: {
        prototype: HTMLKubaListElement;
        new (): HTMLKubaListElement;
    };
    interface HTMLKubaTableAttributesElement extends Components.KubaTableAttributes, HTMLStencilElement {
    }
    var HTMLKubaTableAttributesElement: {
        prototype: HTMLKubaTableAttributesElement;
        new (): HTMLKubaTableAttributesElement;
    };
    interface HTMLKubaTableOptionsElement extends Components.KubaTableOptions, HTMLStencilElement {
    }
    var HTMLKubaTableOptionsElement: {
        prototype: HTMLKubaTableOptionsElement;
        new (): HTMLKubaTableOptionsElement;
    };
    interface HTMLKubaTableSlotElement extends Components.KubaTableSlot, HTMLStencilElement {
    }
    var HTMLKubaTableSlotElement: {
        prototype: HTMLKubaTableSlotElement;
        new (): HTMLKubaTableSlotElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "kuba-address-form": HTMLKubaAddressFormElement;
        "kuba-button": HTMLKubaButtonElement;
        "kuba-home": HTMLKubaHomeElement;
        "kuba-input": HTMLKubaInputElement;
        "kuba-list": HTMLKubaListElement;
        "kuba-table-attributes": HTMLKubaTableAttributesElement;
        "kuba-table-options": HTMLKubaTableOptionsElement;
        "kuba-table-slot": HTMLKubaTableSlotElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface KubaAddressForm {
        "match"?: MatchResults;
    }
    interface KubaButton {
        "componentId"?: string;
        "handleSubmit"?: any;
    }
    interface KubaHome {
    }
    interface KubaInput {
        "componentId"?: string;
        "inputType"?: "text" | "number";
        "label"?: string;
        "onInputEvent"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface KubaList {
    }
    interface KubaTableAttributes {
        "body"?: any;
        "head"?: any;
    }
    interface KubaTableOptions {
        "delete"?: any;
    }
    interface KubaTableSlot {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "kuba-address-form": KubaAddressForm;
        "kuba-button": KubaButton;
        "kuba-home": KubaHome;
        "kuba-input": KubaInput;
        "kuba-list": KubaList;
        "kuba-table-attributes": KubaTableAttributes;
        "kuba-table-options": KubaTableOptions;
        "kuba-table-slot": KubaTableSlot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "kuba-address-form": LocalJSX.KubaAddressForm & JSXBase.HTMLAttributes<HTMLKubaAddressFormElement>;
            "kuba-button": LocalJSX.KubaButton & JSXBase.HTMLAttributes<HTMLKubaButtonElement>;
            "kuba-home": LocalJSX.KubaHome & JSXBase.HTMLAttributes<HTMLKubaHomeElement>;
            "kuba-input": LocalJSX.KubaInput & JSXBase.HTMLAttributes<HTMLKubaInputElement>;
            "kuba-list": LocalJSX.KubaList & JSXBase.HTMLAttributes<HTMLKubaListElement>;
            "kuba-table-attributes": LocalJSX.KubaTableAttributes & JSXBase.HTMLAttributes<HTMLKubaTableAttributesElement>;
            "kuba-table-options": LocalJSX.KubaTableOptions & JSXBase.HTMLAttributes<HTMLKubaTableOptionsElement>;
            "kuba-table-slot": LocalJSX.KubaTableSlot & JSXBase.HTMLAttributes<HTMLKubaTableSlotElement>;
        }
    }
}
