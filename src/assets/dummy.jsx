function get_dummy_data() {
  return {
    tasks: [
      { id: 1, title: "Start React Project", prio: "High", status: "todo" },
      {
        id: 2,
        title: "Create Column Component",
        prio: "Medium",
        status: "todo",
      },
      {
        id: 3,
        title: "Create Taks component",
        prio: "High",
        status: "inProgress",
      },
      {
        id: 4,
        title: "Ask Gemini for help",
        prio: "Low",
        status: "complete",
      },
    ],
  };
}

export default get_dummy_data;
