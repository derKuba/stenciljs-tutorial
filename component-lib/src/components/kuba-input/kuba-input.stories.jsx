export default {
  title: 'Content/KubaInput',
  parameters: {},
  argTypes: {},
};

const Template = args => `<kuba-input
componentId="first-name"
label="Vorname:"
value=""
required="true"
pattern="[a-zA-Z]+"
></kuba-input>`;
export const Input = Template.bind({});
