export default {
    title: "Content/My-Component",
    parameters: {

    },
    argTypes: {
        first: {
            name: "first",
            type: { name: "string", required: false },
            defaultValue: "Vorname",
            description: "der Vorname",
            control: {
                type: "text",
            },
        },
    }
};

const Template = (args) => `<my-component first="${args.first}"></my-component>`
export const MyComponent = Template.bind({});

