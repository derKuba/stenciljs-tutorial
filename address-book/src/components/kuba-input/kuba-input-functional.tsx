import { h } from "@stencil/core";

export const KubaInputFunctional = ({
  componentId,
  label,
  type = "text",
  value,
}: {
  componentId: string;
  label: string;
  type: "text" | "number";
  value: string;
}) => {
  const onInput = (event) => {
    event.document.target.dispatchEvent(
      new CustomEvent("inputEvent", { detail: { value: event.target.value } }),
    );
  };
  return (
    <div class="kuba-input">
      <label htmlFor={componentId}>{label}</label>
      <input type={type} id={componentId} value={value} onInput={onInput} />
    </div>
  );
};
