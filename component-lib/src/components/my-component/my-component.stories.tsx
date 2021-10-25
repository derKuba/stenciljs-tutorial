export default {
    title: 'Content/My-Component',
    parameters: {},
    argTypes: {
        firstname: {
            name: 'firstname',
            type: { name: 'string', required: false },
            defaultValue: 'Max',
            description: 'der Vorname',
            control: {
                type: 'text',
            },
        },
        middlename: {
            name: 'middlename',
            type: { name: 'string', required: false },
            defaultValue: 'Dabelju',
            description: 'zweiter Vorname',
            control: {
                type: 'text',
            },
        },
        lastname: {
            name: 'lastname',
            type: { name: 'string', required: false },
            defaultValue: 'Nachname',
            description: 'von Adelher',
            control: {
                type: 'text',
            },
        },
    },
};

const Template = args => `<my-component first="${args.firstname}" middle="${args.middlename}" last="${args.lastname}"></my-component>`;
export const Dynamic = Template.bind({});
