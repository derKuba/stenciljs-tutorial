export default {
  title: "Content/Wizard",
  parameters: {
    customEventPanel: {
      data: [
        {

          eventName: "wizard:next",
          eventData: {
            opt: 23
          }
        },
        {

          eventName: "wizard:previous",
          eventData: {
            bla: 23
          }
        },
        {

          eventName: "wizard:abort",
        },
        {

          eventName: "chapterChangeEvent",
        },
      ],
    },
  },
  argTypes: {

  }
};

const Template = () => `<kuba-wizard></kuba-wizard>`
export const Wizard = Template.bind({});

