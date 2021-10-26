export default {
  title: "Content/Wizards",
  parameters: {
    customEventPanel: [
      {

        eventName: "wizard:next",
        eventData: {
          opt: 23
        },
        selector: "mein.selektor"
      },
      {

        eventName: "wizard:previous",
        eventData: {
          bla: 23
        }
      },

    ],

  },
  argTypes: {

  }
};

const Template = () => `<kuba-wizard></kuba-wizard>`
export const Wizard = Template.bind({});

