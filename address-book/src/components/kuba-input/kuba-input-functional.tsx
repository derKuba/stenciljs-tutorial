import { h } from "@stencil/core";

export const KubaInputFunctional = ({
  componentId,
  label,
  type = "text",
  value,
  setter,
}: {
  componentId: string;
  label: string;
  type: "text" | "number";
  value: string;
  setter: Function;
}) => {

  const onInput = (event) => {
    setter({ value: event.target.value });
  };
  return (
    <div class="kuba-input">
      <label htmlFor={componentId}>{label}</label>
      <input type={type} id={componentId} value={value} onInput={onInput} />
    </div>
  );
};
